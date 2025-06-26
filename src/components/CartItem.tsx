import React from 'react';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types/product';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity } = item;
  const minQuantity = product.minOrderQuantity || 20;
  const orderIncrement = product.orderIncrement || 10;
  const isAtMinimum = quantity <= minQuantity;
  const roundedQuantity = Math.ceil(quantity / orderIncrement) * orderIncrement;

  const handleDecrease = () => {
    const newQuantity = Math.max(minQuantity, quantity - orderIncrement);
    onUpdateQuantity(product.id, newQuantity);
  };

  const handleIncrease = () => {
    const newQuantity = quantity % orderIncrement === 0 
      ? quantity + orderIncrement 
      : roundedQuantity;
    onUpdateQuantity(product.id, newQuantity);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-lg"
          loading="lazy"
        />
        <div>
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-500">₹{product.price.toFixed(2)} each</p>
          <div className="flex items-center mt-1 text-xs text-amber-600">
            <span>Min: {minQuantity} | Increments of {orderIncrement}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrease}
            disabled={isAtMinimum}
            className={`p-1 rounded ${
              isAtMinimum ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            aria-label={`Decrease quantity by ${orderIncrement}`}
          >
            -
          </button>
          
          <div className="flex flex-col items-center">
            <span className="w-8 text-center">{quantity}</span>
            {quantity % orderIncrement !== 0 && (
              <span className="text-xs text-amber-600">
                Round to {roundedQuantity}
              </span>
            )}
          </div>
          
          <button
            onClick={handleIncrease}
            className="p-1 rounded hover:bg-gray-100"
            aria-label={`Increase quantity to ${roundedQuantity}`}
          >
            +
          </button>
        </div>
        
        <div className="w-20 text-right">
          <p className="font-medium">₹{(product.price * quantity).toFixed(2)}</p>
        </div>
        
        <button
          onClick={() => onRemove(product.id)}
          className="text-red-500 hover:text-red-700 p-1"
          aria-label={`Remove ${product.name} from cart`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
