import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '../types/product';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  validateMinimumQuantities: () => boolean;
}

// Helper function to validate and adjust quantity based on MOQ rules
const validateQuantity = (quantity: number, minOrderQuantity: number = 20, orderIncrement: number = 10): number => {
  // Ensure minimum is at least the minimum order quantity
  if (quantity < minOrderQuantity) {
    return minOrderQuantity;
  }
  
  // Round up to nearest multiple of orderIncrement (default 10)
  const remainder = quantity % orderIncrement;
  if (remainder !== 0) {
    return quantity + (orderIncrement - remainder);
  }
  
  return quantity;
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (product, quantity = 20) => {
        const items = get().items;
        const existingItem = items.find(item => item.product.id === product.id);
        
        // Use product's minOrderQuantity (default 20) and orderIncrement (default 10)
        const minQuantity = product.minOrderQuantity || 20;
        const orderIncrement = product.orderIncrement || 10;
        const validatedQuantity = validateQuantity(quantity, minQuantity, orderIncrement);
        
        if (existingItem) {
          // If item exists, add the validated quantity
          const newQuantity = existingItem.quantity + validatedQuantity;
          const finalQuantity = validateQuantity(newQuantity, minQuantity, orderIncrement);
          
          set({
            items: items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: finalQuantity }
                : item
            ),
          });
        } else {
          // If new item, use the validated quantity
          set({ items: [...items, { product, quantity: validatedQuantity }] });
        }
      },
      
      removeItem: (productId) => {
        set({
          items: get().items.filter(item => item.product.id !== productId),
        });
      },
      
      updateQuantity: (productId, newQuantity) => {
        const items = get().items;
        const item = items.find(item => item.product.id === productId);
        
        if (!item) return;
        
        const minQuantity = item.product.minOrderQuantity || 20;
        const orderIncrement = item.product.orderIncrement || 10;
        
        // If quantity is zero or negative, remove the item
        if (newQuantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        // If quantity is less than minimum, set to minimum
        if (newQuantity < minQuantity) {
          newQuantity = minQuantity;
        }
        
        // Validate quantity against MOQ rules (only for increasing or setting a specific quantity)
        const validatedQuantity = newQuantity > item.quantity 
          ? validateQuantity(newQuantity, minQuantity, orderIncrement)
          : newQuantity;
        
        set({
          items: items.map(cartItem =>
            cartItem.product.id === productId
              ? { ...cartItem, quantity: validatedQuantity }
              : cartItem
          ),
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      
      validateMinimumQuantities: () => {
        const items = get().items;
        let hasChanges = false;
        
        const updatedItems = items.map(item => {
          const minQuantity = item.product.minOrderQuantity || 20;
          const orderIncrement = item.product.orderIncrement || 10;
          let newQuantity = item.quantity;
          
          // Ensure quantity meets minimum
          if (newQuantity < minQuantity) {
            newQuantity = minQuantity;
            hasChanges = true;
          }
          
          // Ensure quantity is a multiple of orderIncrement
          const remainder = newQuantity % orderIncrement;
          if (remainder !== 0) {
            newQuantity = newQuantity + (orderIncrement - remainder);
            hasChanges = true;
          }
          
          return hasChanges ? { ...item, quantity: newQuantity } : item;
        });
        
        if (hasChanges) {
          set({ items: updatedItems });
        }
        
        return !hasChanges; // Returns true if no changes were needed
      },
    }),
    {
      name: 'qube-cart-storage',
    }
  )
);