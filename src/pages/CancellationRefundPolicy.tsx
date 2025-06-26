import { XCircle, RefreshCw, AlertTriangle, Clock, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellation & Refund Policy</h1>
          <p className="text-xl text-gray-600">Clear Guidelines. Ethical Practice. Health-First Support.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Qube Health Care, we take great pride in offering curated, high-quality health and wellness products to customers across India and beyond. While we aim for every order to meet your expectations, we recognize that issues can sometimes arise. This policy outlines our process for cancellations, damaged goods, and refunds—ensuring fairness, transparency, and customer-first service.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <XCircle className="w-5 h-5 mr-2 text-indigo-600" />
                Order Cancellations
              </h2>
              <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-amber-500" />
                Cancellation Window: Within 2 Hours of Purchase
              </h3>
              <p className="mb-4">
                You may request a cancellation within 2 hours of placing your order, provided it has not yet been packed, dispatched, or handed over to our logistics partner.
              </p>
              <p className="mb-4">
                Once the order has entered the processing or shipping phase, cancellation may no longer be possible due to inventory and hygiene compliance protocols.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                <p className="text-blue-700 font-medium">To cancel your order:</p>
                <p className="text-blue-700">
                  Contact us via our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a>, WhatsApp, or email with your Order ID and reason for cancellation.
                </p>
                <p className="text-blue-700 mt-2">
                  For urgent changes or accidental orders, please get in touch immediately—we will do our best to assist before shipment.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-indigo-600" />
                Damaged, Defective, or Wrong Products
              </h2>
              <p className="mb-4">
                While we follow strict quality and packing protocols, please contact us within 7 days of delivery if:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your item arrives damaged,</li>
                <li>You receive a defective or expired product, or</li>
                <li>There are missing items or tampering signs on the package.</li>
              </ul>
              <p className="mb-4">
                To speed up resolution, please share:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Your Order ID</li>
                <li>Clear photos of the product and packaging</li>
                <li>A brief description of the issue</li>
              </ul>
              <p>
                Once verified, we'll offer a replacement, credit note, or full refund, based on your preference and product category.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns & Product Eligibility</h2>
              <p className="mb-4">
                Due to the sensitive and consumable nature of many healthcare items, we do not accept returns for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Opened or used products</li>
                <li>Items without original packaging/seals</li>
                <li>Nutritional, skincare, or supplement products—unless defective</li>
              </ul>
              <p className="mb-4">
                If a product does not match its description, appears to be substandard, or was misdelivered, please reach out within 7 days of receipt. After evaluation, we may issue:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>A product replacement</li>
                <li>Store credit</li>
                <li>A partial or full refund, as appropriate</li>
              </ul>
              <p>
                Each request is reviewed in good faith with a priority on your health, safety, and satisfaction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wholesale / B2B Orders</h2>
              <p className="mb-4">
                Cancellation, return, and refund conditions for bulk purchases may differ based on your agreed-upon purchase terms or quotation.
              </p>
              <p className="mb-4">
                Please refer to your B2B agreement or contact our Wholesale Support Team for clarification on:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Return eligibility</li>
                <li>Refund timelines</li>
                <li>Required documentation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <RefreshCw className="w-5 h-5 mr-2 text-indigo-600" />
                Refund Processing
              </h2>
              <p className="mb-4">
                Once a refund is approved, the steps are as follows:
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="font-medium mr-2">Initiation:</span>
                    <span>Within 3–5 business days of confirmation</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium mr-2">Refund Method:</span>
                    <span>Same as original payment mode (UPI, card, net banking, etc.)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium mr-2">Completion Time:</span>
                    <span>5–10 business days (depending on bank/gateway)</span>
                  </p>
                </div>
              </div>
              <p>
                You'll receive confirmation via email or WhatsApp once your refund is initiated.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-indigo-600" />
                Exceptions
              </h2>
              <p className="mb-4">
                Refunds or replacements may not be applicable in the following cases:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Delivery delays caused by natural disasters, strikes, or logistical disruptions</li>
                <li>Products returned without prior authorization or after the 7-day reporting window</li>
                <li>Items damaged due to improper storage, unauthorized use, or customer negligence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h2>
              <p className="mb-6">
                We're here to assist with any issues related to cancellations, returns, or refunds. Contact us at:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <p className="flex items-start">
                        <Phone className="w-5 h-5 mr-2 mt-1 text-indigo-600 flex-shrink-0" />
                        <a href="tel:+917708626116" className="hover:underline">+91 77086 26116</a>
                      </p>
                      <p className="flex items-start">
                        <Mail className="w-5 h-5 mr-2 mt-1 text-indigo-600 flex-shrink-0" />
                        <a href="mailto:info@qubehealthcare.online" className="hover:underline">info@qubehealthcare.online</a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
                    <div className="flex">
                      <MapPin className="w-5 h-5 mr-2 mt-1 text-indigo-600 flex-shrink-0" />
                      <div>
                        <p>Qube Health Care</p>
                        <p>Door No: 08, Shop No: Q.S.L. Complex</p>
                        <p>Muniyappan Kovil Street,</p>
                        <p>Erode – 638001, Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mt-8 text-center text-gray-600">
                Qube Health Care is committed to trust, care, and customer protection. We stand behind the quality of every product we deliver and will resolve any genuine concern with transparency and urgency.
              </p>
              
              <p className="mt-8 text-center text-sm text-gray-500">
                Last Updated: June 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
