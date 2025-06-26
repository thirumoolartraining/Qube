import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Building, Mail, Phone, Package, MessageSquare, Send } from 'lucide-react';
import { rfqSchema } from '../schemas/validation';
import { RFQService } from '../services/rfq';
import toast from 'react-hot-toast';

interface RFQFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  productInterest: string;
  quantity: number;
  message: string;
}

const BulkQuote: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
    watch,
  } = useForm<RFQFormData>({
    resolver: zodResolver(rfqSchema),
    mode: 'onChange',
  });

  const watchedFields = watch();

  const getInputClassName = (fieldName: keyof RFQFormData) => {
    const hasError = errors[fieldName];
    const isTouched = touchedFields[fieldName];
    const hasValue = watchedFields[fieldName];
    const isValid = isTouched && hasValue && !hasError;

    if (hasError) return 'form-input-error';
    if (isValid) return 'form-input-valid';
    return 'form-input';
  };

  const onSubmit = async (data: RFQFormData) => {
    try {
      await RFQService.createRFQ({
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        product_interest: data.productInterest,
        quantity: data.quantity,
        message: data.message,
      });
      
      toast.success('Your quote request has been submitted successfully!');
      reset();
    } catch (error) {
      console.error('Error submitting RFQ:', error);
      toast.error('Failed to submit quote request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Bulk Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get competitive pricing for bulk orders. We offer special rates for healthcare professionals, 
              distributors, and international buyers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12">
          {/* Form - 62% width following Golden Ratio */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      className={getInputClassName('name')}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="form-error">{errors.name.message}</p>
                    )}
                    {touchedFields.name && watchedFields.name && !errors.name && (
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
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email.message}</p>
                    )}
                    {touchedFields.email && watchedFields.email && !errors.email && (
                      <p className="form-success">✓</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      className={getInputClassName('company')}
                      placeholder="Healthcare Solutions Inc."
                    />
                    {errors.company && (
                      <p className="form-error">{errors.company.message}</p>
                    )}
                    {touchedFields.company && watchedFields.company && !errors.company && (
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
                      placeholder="+91 77086 26116"
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone.message}</p>
                    )}
                    {touchedFields.phone && watchedFields.phone && !errors.phone && (
                      <p className="form-success">✓</p>
                    )}
                  </div>
                </div>

                {/* Product Interest */}
                <div>
                  <label className="form-label">
                    Product Interest *
                  </label>
                  <input
                    type="text"
                    {...register('productInterest')}
                    className={getInputClassName('productInterest')}
                    placeholder="Vitamin D3, Omega-3, Probiotics..."
                  />
                  {errors.productInterest && (
                    <p className="form-error">{errors.productInterest.message}</p>
                  )}
                  {touchedFields.productInterest && watchedFields.productInterest && !errors.productInterest && (
                    <p className="form-success">✓</p>
                  )}
                </div>

                {/* Quantity */}
                <div>
                  <label className="form-label">
                    Estimated Quantity * (Minimum 20 units, multiples of 10)
                  </label>
                  <input
                    type="number"
                    {...register('quantity', { valueAsNumber: true })}
                    className={getInputClassName('quantity')}
                    placeholder="20"
                    min="20"
                    step="10"
                  />
                  {errors.quantity && (
                    <p className="form-error">{errors.quantity.message}</p>
                  )}
                  {touchedFields.quantity && watchedFields.quantity && !errors.quantity && (
                    <p className="form-success">✓</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Valid quantities: 20, 30, 40, 50, etc.
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">
                    Additional Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className={getInputClassName('message')}
                    placeholder="Please provide any additional details about your requirements, preferred delivery timeline, or specific product specifications..."
                  />
                  {errors.message && (
                    <p className="form-error">{errors.message.message}</p>
                  )}
                  {touchedFields.message && watchedFields.message && !errors.message && (
                    <p className="form-success">✓</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>
            </div>
          </div>

          {/* Information Panel - 38% width following Golden Ratio */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Benefits */}
              <div className="bg-action-blue/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Why Choose Bulk Orders?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-action-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Competitive bulk pricing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-action-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Priority shipping</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-action-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-action-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Flexible payment terms</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Need Help?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-action-blue" />
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-600">+91 77086 26116</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-action-blue" />
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-600">bulk@qubehealthcare.online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-action-blue" />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Updated Minimum Orders */}
              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Minimum Order Quantities
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">All Products</span>
                    <span className="font-medium">20 units minimum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Order Increments</span>
                    <span className="font-medium">Multiples of 10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Valid Quantities</span>
                    <span className="font-medium">20, 30, 40, 50...</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  * Standardized quantities ensure optimal packaging and competitive pricing across all products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkQuote;