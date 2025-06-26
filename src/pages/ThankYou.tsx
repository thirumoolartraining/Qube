import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, Home, Package, Mail, Phone } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-wellness">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-success-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-6">
            Thank You for Your Order!
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Your order has been successfully placed and is being processed. 
            We'll send you a confirmation email with tracking details shortly.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-action-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-action-blue" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-text-primary mb-2">
                Order Processing
              </h3>
              <p className="text-text-secondary text-sm">
                Your order is being prepared for shipment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-info" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-text-primary mb-2">
                Email Confirmation
              </h3>
              <p className="text-text-secondary text-sm">
                Check your inbox for order details
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-text-primary mb-2">
                Customer Support
              </h3>
              <p className="text-text-secondary text-sm">
                We're here to help with any questions
              </p>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold font-heading text-text-primary mb-6 text-center">
            What Happens Next?
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Order Confirmation</h3>
                <p className="text-text-secondary text-sm">
                  You'll receive an email confirmation with your order details within the next few minutes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Processing & Packaging</h3>
                <p className="text-text-secondary text-sm">
                  Our team will carefully prepare your order for shipment within 1-2 business days.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Shipping Notification</h3>
                <p className="text-text-secondary text-sm">
                  Once shipped, you'll receive tracking information to monitor your package's progress.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Delivery</h3>
                <p className="text-text-secondary text-sm">
                  Your order will arrive within 2-3 business days for standard shipping.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          
          <Link
            to="/products"
            className="btn-secondary inline-flex items-center justify-center"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            Need help with your order? Contact our customer support team:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+917708626116" 
              className="flex items-center text-primary hover:text-green-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 77086 26116
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a 
              href="mailto:support@qubehealthcare.online" 
              className="flex items-center text-primary hover:text-green-700 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              support@qubehealthcare.online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;