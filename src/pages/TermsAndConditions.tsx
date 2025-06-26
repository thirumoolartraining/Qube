import { FileText, Shield, CreditCard, Truck, User, Lock, Globe, AlertTriangle } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">Last updated: June 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to Qube Health Care. By accessing and using our website (qubehealthcare.in), you agree to comply with and be bound by the following Terms and Conditions. These terms govern all interactions, purchases, and services offered through our digital platform. Please review them carefully before using the site or placing an order.
            </p>

            <p className="mb-8 text-gray-700">
              Continued use of the site implies full acceptance of these terms. If you disagree with any part, we advise you to discontinue use of the site.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-indigo-600" />
                1. General Use of the Website
              </h2>
              <p className="mb-4">
                By using this website, you confirm that you are either:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>At least 18 years of age, or</li>
                <li>Accessing the site under the supervision of a parent or legal guardian.</li>
              </ul>
              <p className="mb-4">
                You agree to use the website only for lawful purposes and in a way that does not violate the rights or restrict the use of the site by others.
              </p>
              <p>
                Qube Health Care reserves the right to restrict, suspend, or terminate access to the website (or specific features) without prior notice or liability.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-indigo-600" />
                2. Product Listings, Pricing & Availability
              </h2>
              <p className="mb-4">
                All products listed are subject to availability and may be updated, modified, or discontinued without prior notice.
              </p>
              <p className="mb-4">
                We strive to maintain accuracy in product descriptions, health-related claims, ingredient lists, and images. However, occasional errors may occur. We reserve the right to correct such errors, cancel affected orders, and issue refunds if needed.
              </p>
              <p className="mb-4">
                Prices are displayed in Indian Rupees (INR ₹) unless otherwise stated. Pricing may change at any time due to supplier costs, regulatory changes, or platform updates.
              </p>
              <p>
                For bulk or wholesale purchases, minimum order quantities apply, and specific pricing will be communicated to verified buyers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-indigo-600" />
                3. Payments
              </h2>
              <p className="mb-4">
                All orders must be paid in full at the time of purchase unless otherwise agreed upon (e.g., approved B2B credit terms).
              </p>
              <p className="mb-4">
                We accept major credit/debit cards, UPI, net banking, and other secure digital payment options via trusted third-party payment gateways.
              </p>
              <p className="mb-4">
                Qube Health Care does not store any payment details. All financial transactions are encrypted and processed externally through PCI-compliant systems.
              </p>
              <p>
                For billing issues, duplicate charges, or unauthorized transactions, please contact our support team immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-indigo-600" />
                4. Shipping & Delivery
              </h2>
              <p className="mb-4">
                We deliver across India through reliable courier and logistics partners.
              </p>
              <p className="mb-4">
                Estimated delivery times are provided during checkout and vary based on location and product availability.
              </p>
              <p className="mb-4">
                Order tracking details are shared via email, SMS, or WhatsApp once the order is dispatched.
              </p>
              <p>
                While we do our best to ensure timely delivery, delays caused by third-party logistics or regional restrictions are beyond our direct control. However, we will assist in resolving such issues promptly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-indigo-600" />
                5. User Conduct & Responsibilities
              </h2>
              <p className="mb-4">
                By accessing or using the website, you agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Share false, misleading, or unlawful information</li>
                <li>Attempt to access restricted areas or other users' accounts</li>
                <li>Use content or product information for commercial purposes without permission</li>
                <li>Engage in any activity that disrupts the security or performance of the platform</li>
              </ul>
              <p>
                Violation of these conditions may result in temporary or permanent suspension from the site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-indigo-600" />
                6. Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this website—including the Qube Health Care name, logo, product listings, images, and written material—is the intellectual property of Qube Health Care and its content partners.
              </p>
              <p>
                You may not reproduce, republish, distribute, or use any content without written authorization.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-indigo-600" />
                7. Modifications to Terms
              </h2>
              <p className="mb-4">
                Qube Health Care reserves the right to update, modify, or revise these Terms & Conditions at any time.
              </p>
              <p>
                Revisions will be reflected on this page with a revised "Last Updated" date. Continued use of the website after such changes implies acceptance of the updated terms.
              </p>
              <p className="mt-4 text-gray-600">
                Please review this page periodically to stay informed.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-indigo-600" />
                8. Governing Law
              </h2>
              <p>
                These Terms & Conditions are governed by the laws of India. Any disputes shall fall under the jurisdiction of courts in Erode, Tamil Nadu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
              <p className="mb-6">
                If you have any questions, need assistance, or would like to clarify any part of these Terms & Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Qube Health Care</h3>
                <p className="mb-2">
                  Door No: 08, Shop No: Q.S.L. Complex<br />
                  Muniyappan Kovil Street<br />
                  Erode – 638001<br />
                  Tamil Nadu, India
                </p>
                <p className="mt-4 flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:+917708626116" className="hover:underline">+91 77086 26116</a>
                </p>
                <p className="mt-2 flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:info@qubehealthcare.online" className="hover:underline">info@qubehealthcare.online</a>
                </p>
                <p className="mt-2">
                  <span className="mr-2">💬</span>
                  <span>WhatsApp & Contact Form: Available on our Contact Page</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
