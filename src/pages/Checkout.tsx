import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreditCard, Truck, Shield, ArrowLeft, Lock, RefreshCcw, Users, AlertTriangle, Plus, Minus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { checkoutSchema } from '../schemas/validation';
import { CheckoutData } from '../types/product';
import { useCart } from '../hooks/useCart';
import { OrderService } from '../services/orders';
import toast from 'react-hot-toast';

const Checkout: React.FC = () => {
  const { items, getTotalPrice, clearCart, validateMinimumQuantities, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    watch,
  } = useForm<CheckoutData>({
    resolver: zodResolver(checkoutSchema),
    mode: 'onChange',
  });

  const watchedFields = watch();

  const getInputClassName = (fieldName: keyof CheckoutData) => {
    const hasError = errors[fieldName];
    const isTouched = touchedFields[fieldName];
    const hasValue = watchedFields[fieldName];
    const isValid = isTouched && hasValue && !hasError;

    if (hasError) return 'form-input-error';
    if (isValid) return 'form-input-valid';
    return 'form-input';
  };

  const onSubmit = async (data: CheckoutData) => {
    // Validate minimum quantities before processing
    if (!validateMinimumQuantities()) {
      toast.error('Please ensure all items meet minimum quantity requirements');
      return;
    }

    try {
      const orderData = {
        shipping_address: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          country: data.country,
          postalCode: data.postalCode,
        },
        order_notes: data.orderNotes,
        items: items,
      };

      await OrderService.createOrder(orderData);
      
      clearCart();
      
      // Show success notification
      toast.success(
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="font-medium text-gray-900">Order Placed Successfully!</h3>
            <p className="text-sm text-gray-600">Thank you for your order. Our team will get back to you shortly.</p>
          </div>
        </div>,
        {
          duration: 5000,
          style: {
            background: '#f0fdf4',
            border: '1px solid #86efac',
            color: '#166534',
            padding: '1rem',
            borderRadius: '0.5rem',
            width: '100%',
            maxWidth: '24rem',
          },
          iconTheme: {
            primary: '#16a34a',
            secondary: '#f0fdf4',
          },
        }
      );
      
      navigate('/thank-you');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to your cart before checking out.</p>
          <Link
            to="/products"
            className="btn-primary"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Check if any items have minimum quantity requirements
  const hasMinimumQuantityItems = items.some(item => item.product.minOrderQuantity && item.product.minOrderQuantity > 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/products"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Shopping
            </Link>
            <div className="flex-1 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Checkout
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12">
          {/* Checkout Form - 62% width following Golden Ratio */}
          <div className="lg:col-span-5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Messages removed as per request */}

              {/* Shipping Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Truck className="w-6 h-6 mr-3 text-action-blue" />
                  Shipping Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      {...register('firstName')}
                      className={getInputClassName('firstName')}
                    />
                    {errors.firstName && (
                      <p className="form-error">{errors.firstName.message}</p>
                    )}
                    {touchedFields.firstName && watchedFields.firstName && !errors.firstName && (
                      <p className="form-success">✓</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      {...register('lastName')}
                      className={getInputClassName('lastName')}
                    />
                    {errors.lastName && (
                      <p className="form-error">{errors.lastName.message}</p>
                    )}
                    {touchedFields.lastName && watchedFields.lastName && !errors.lastName && (
                      <p className="form-success">✓</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className={getInputClassName('email')}
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email.message}</p>
                    )}
                    {touchedFields.email && watchedFields.email && !errors.email && (
                      <p className="form-success">✓</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className={getInputClassName('phone')}
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone.message}</p>
                    )}
                    {touchedFields.phone && watchedFields.phone && !errors.phone && (
                      <p className="form-success">✓</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="form-label">
                    Address *
                  </label>
                  <input
                    type="text"
                    {...register('address')}
                    className={getInputClassName('address')}
                  />
                  {errors.address && (
                    <p className="form-error">{errors.address.message}</p>
                  )}
                  {touchedFields.address && watchedFields.address && !errors.address && (
                    <p className="form-success">✓</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label className="form-label">
                      City *
                    </label>
                    <input
                      type="text"
                      {...register('city')}
                      className={getInputClassName('city')}
                    />
                    {errors.city && (
                      <p className="form-error">{errors.city.message}</p>
                    )}
                    {touchedFields.city && watchedFields.city && !errors.city && (
                      <p className="form-success">✓</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">
                      Country *
                    </label>
                    <select
                      {...register('country')}
                      className={getInputClassName('country')}
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IN">India</option>
                      <option value="JP">Japan</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="form-error">{errors.country.message}</p>
                    )}
                    {touchedFields.country && watchedFields.country && !errors.country && (
                      <p className="form-success">✓</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      {...register('postalCode')}
                      className={getInputClassName('postalCode')}
                    />
                    {errors.postalCode && (
                      <p className="form-error">{errors.postalCode.message}</p>
                    )}
                    {touchedFields.postalCode && watchedFields.postalCode && !errors.postalCode && (
                      <p className="form-success">✓</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="form-label">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    {...register('orderNotes')}
                    rows={3}
                    className="form-input"
                    placeholder="Any special instructions for your order..."
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="w-6 h-6 mr-3 text-action-blue" />
                  Payment Information
                </h2>
                
                <div className="bg-action-blue/5 border border-action-blue/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-action-blue mr-2" />
                    <span className="text-sm text-action-blue-text">
                      Your payment information is secure and encrypted
                    </span>
                  </div>
                </div>

                <div className="text-center py-8">
                  <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Payment processing will be implemented with your preferred payment gateway
                  </p>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className={`btn-primary w-full py-4 flex items-center justify-center text-lg ${
                  isSubmitting || Object.keys(errors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                ) : (
                  <CreditCard className="w-6 h-6 mr-2" />
                )}
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>

              {/* Trust Signals */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success-green/10 rounded-full flex items-center justify-center">
                      <Lock className="w-5 h-5 text-success-green" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Secure Payment</p>
                      <p className="text-xs text-text-secondary">256-bit SSL encryption</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-action-blue/10 rounded-full flex items-center justify-center">
                      <RefreshCcw className="w-5 h-5 text-action-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Money-Back Guarantee</p>
                      <p className="text-xs text-text-secondary">30-day return policy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">24/7 Support</p>
                      <p className="text-xs text-text-secondary">Expert customer care</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary - 38% width following Golden Ratio */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => {
                  const minQuantity = item.product.minOrderQuantity || 1;
                  const hasMinimum = minQuantity > 1;
                  
                  return (
                    <div key={item.product.id} className="flex items-center space-x-4 p-3 border border-gray-100 rounded-lg">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center space-x-2 mt-1">
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                updateQuantity(item.product.id, Math.max(minQuantity, item.quantity - 10));
                              }}
                              className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-action-blue"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <input
                              type="number"
                              min={minQuantity}
                              step="10"
                              value={item.quantity}
                              onChange={(e) => {
                                const newQty = parseInt(e.target.value) || minQuantity;
                                updateQuantity(item.product.id, Math.max(minQuantity, newQty));
                              }}
                              onBlur={(e) => {
                                const newQty = parseInt(e.target.value) || minQuantity;
                                const validatedQty = Math.ceil(newQty / 10) * 10; // Ensure multiple of 10
                                updateQuantity(item.product.id, Math.max(minQuantity, validatedQty));
                              }}
                              className="w-16 text-center border border-gray-300 rounded-md py-1 text-sm"
                            />
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                updateQuantity(item.product.id, item.quantity + 10);
                              }}
                              className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-action-blue"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          {hasMinimum && (
                            <p className="text-xs text-amber-600 mt-1">Min: {minQuantity} (Multiples of 10)</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            removeItem(item.product.id);
                          }}
                          className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors mb-1"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          Remove
                        </button>
                        <span className="font-semibold text-gray-900">
                          ₹{(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <p className="text-xs text-gray-500">
                          ₹{item.product.price} each
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-success-green font-medium">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium text-xs">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-action-blue">
                      ₹{getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-success-green/5 border border-success-green/20 rounded-lg p-4">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-success-green mr-2" />
                  <span className="text-sm text-success-green-text">
                    Free shipping on all orders over ₹2000
                  </span>
                </div>
              </div>

              {/* Minimum Quantity Summary */}
              {hasMinimumQuantityItems && (
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-amber-800 mb-1">
                        Minimum Quantities Applied
                      </p>
                      <p className="text-xs text-amber-700">
                        Some items have minimum order requirements for bulk pricing benefits.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;