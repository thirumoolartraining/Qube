import React, { useRef, useEffect } from 'react';
import { X, ShoppingBag, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
        tabIndex={-1}
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 id="cart-drawer-title" className="text-xl font-semibold font-heading text-text-primary">Shopping Cart</h2>
            <button
              ref={closeButtonRef}
              onClick={closeCart}
              className="p-2 hover:bg-surface rounded-full transition-colors duration-200"
              aria-label="Close shopping cart"
            >
              <X className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-text-secondary" />
                </div>
                <p className="text-text-secondary mb-4 font-medium">Your cart is empty</p>
                <Link
                  to="/products"
                  onClick={closeCart}
                  className="text-primary hover:text-green-700 font-medium transition-colors duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  const minQuantity = item.product.minOrderQuantity || 1;
                  const isAtMinimum = item.quantity <= minQuantity;
                  
                  return (
                    <div key={item.product.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow duration-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        loading="lazy"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-medium font-heading text-text-primary">{item.product.name}</h3>
                        <p className="text-sm text-text-secondary">₹{item.product.price} each</p>
                        
                        {/* Minimum quantity and increment notice */}
                        <div className="flex items-center mt-1">
                          <AlertCircle className="w-3 h-3 text-amber-500 mr-1 flex-shrink-0" />
                          <span className="text-xs text-amber-600">
                            Min: {minQuantity} | Increments of 10
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3 mt-3">
                          <button
                            onClick={() => {
                              const newQuantity = Math.max(minQuantity, item.quantity - 10);
                              updateQuantity(item.product.id, newQuantity);
                            }}
                            className={`p-2 rounded-full transition-colors duration-200 ${
                              isAtMinimum 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-surface'
                            }`}
                            disabled={isAtMinimum}
                            aria-label={`Decrease quantity of ${item.product.name} by 10`}
                            title={isAtMinimum ? `Minimum quantity is ${minQuantity}` : 'Decrease by 10'}
                          >
                            <span className="text-xs">-10</span>
                          </button>
                          
                          <div className="flex flex-col items-center">
                            <span className="w-12 text-center font-medium text-text-primary">{item.quantity}</span>
                            {item.quantity % 10 !== 0 && (
                              <span className="text-xs text-amber-600">Round to {Math.ceil(item.quantity / 10) * 10}</span>
                            )}
                          </div>
                          
                          <button
                            onClick={() => {
                              const newQuantity = item.quantity % 10 === 0 
                                ? item.quantity + 10 
                                : Math.ceil(item.quantity / 10) * 10;
                              updateQuantity(item.product.id, newQuantity);
                            }}
                            className="p-2 hover:bg-surface rounded-full transition-colors duration-200"
                            aria-label={`Increase quantity of ${item.product.name} to next multiple of 10`}
                            title="Increase to next multiple of 10"
                          >
                            <span className="text-xs">+10</span>
                          </button>
                          
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-500 hover:text-red-700 text-sm ml-4 font-medium transition-colors duration-200"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-semibold font-heading text-text-primary">
                          ₹{(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-text-secondary">
                            {item.quantity} × ₹{item.product.price}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-6 space-y-4 bg-surface">

              {/* Show minimum quantity notice if any items have minimum quantities */}
              {items.some(item => item.product.minOrderQuantity && item.product.minOrderQuantity > 1) && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800">
                      Some items have minimum order quantities that are automatically applied.
                    </p>
                  </div>
                </div>
              )}
              
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full text-center block"
              >
                Proceed to Checkout
              </Link>
              
              <Link
                to="/products"
                onClick={closeCart}
                className="btn-secondary w-full text-center block"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;