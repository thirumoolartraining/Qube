import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '../types/product';
import toast from 'react-hot-toast';

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
const validateQuantity = (quantity: number, minOrderQuantity: number = 20): number => {
  // Ensure minimum is at least 20
  if (quantity < minOrderQuantity) {
    return minOrderQuantity;
  }
  
  // Round up to nearest multiple of 10
  const remainder = quantity % 10;
  if (remainder !== 0) {
    return quantity + (10 - remainder);
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
        
        // Always use minimum quantity of 20 and ensure multiples of 10
        const minQuantity = product.minOrderQuantity || 20;
        const validatedQuantity = validateQuantity(quantity, minQuantity);
        
        if (existingItem) {
          // If item exists, add the validated quantity
          const newQuantity = existingItem.quantity + validatedQuantity;
          const finalQuantity = validateQuantity(newQuantity, minQuantity);
          
          set({
            items: items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: finalQuantity }
                : item
            ),
          });
          
          if (validatedQuantity !== quantity) {
            toast.success(`${product.name} added to cart (adjusted to ${validatedQuantity} units - minimum 20, multiples of 10)`);
          } else {
            toast.success(`${product.name} added to cart (${validatedQuantity} units = ₹${(product.price * validatedQuantity).toFixed(2)})`);
          }
        } else {
          // If new item, use the validated quantity
          set({ items: [...items, { product, quantity: validatedQuantity }] });
          
          if (validatedQuantity !== quantity) {
            toast.success(`${product.name} added to cart (adjusted to ${validatedQuantity} units - minimum 20, multiples of 10)`);
          } else {
            toast.success(`${product.name} added to cart (${validatedQuantity} units = ₹${(product.price * validatedQuantity).toFixed(2)})`);
          }
        }
      },
      
      removeItem: (productId) => {
        set({
          items: get().items.filter(item => item.product.id !== productId),
        });
        toast.success('Item removed from cart');
      },
      
      updateQuantity: (productId, quantity) => {
        const items = get().items;
        const item = items.find(item => item.product.id === productId);
        
        if (!item) return;
        
        const minQuantity = item.product.minOrderQuantity || 20;
        
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        // Validate quantity against MOQ rules
        const validatedQuantity = validateQuantity(quantity, minQuantity);
        
        if (quantity < minQuantity) {
          toast.error(`Minimum quantity for ${item.product.name} is ${minQuantity} units`);
          return;
        }
        
        if (validatedQuantity !== quantity) {
          toast(`Quantity adjusted to ${validatedQuantity} units (must be multiples of 10)`, {
            icon: 'ℹ️',
            style: {
              background: '#e0f2fe',
              color: '#0369a1',
            },
          });
        }
        
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
        toast.success('Cart cleared');
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
        let isValid = true;
        
        items.forEach(item => {
          const minQuantity = item.product.minOrderQuantity || 20;
          
          // Check minimum quantity
          if (item.quantity < minQuantity) {
            isValid = false;
            toast.error(`${item.product.name} requires minimum quantity of ${minQuantity} units`);
          }
          
          // Check if quantity is multiple of 10
          if (item.quantity % 10 !== 0) {
            isValid = false;
            toast.error(`${item.product.name} quantity must be in multiples of 10 units`);
          }
        });
        
        return isValid;
      },
    }),
    {
      name: 'qube-cart-storage',
    }
  )
);
