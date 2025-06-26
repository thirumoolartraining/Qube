import { Shield, Lock, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Your Privacy is Our Priority</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Qube Health Care, your privacy is our top priority. We are committed to safeguarding the personal information you share with us, ensuring it is handled with the highest standards of security, transparency, and compliance—aligned with the Indian IT Act and internationally recognized data protection principles such as the GDPR.
            </p>

            <p className="mb-8 text-gray-700">
              This Privacy Policy explains what information we collect, how we use it, how we safeguard it, and your rights when interacting with our website, products, and services.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-indigo-600" />
                Information We Collect
              </h2>
              <p className="mb-4">
                When you browse our site, create an account, make a purchase, or reach out for support or wholesale inquiries, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Shipping & Billing Address</li>
                <li>Payment Details (processed securely via third-party gateway)</li>
                <li>Order History & Health Preferences</li>
                <li>Business Information (for wholesale/B2B clients)</li>
                <li>Device & Browser Data</li>
                <li>Cookies and Tracking Data (for functionality and analytics)</li>
              </ul>
              <p>
                We collect only the information necessary to offer you a personalized, secure, and efficient shopping experience—nothing more.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why We Collect Your Information</h2>
              <p className="mb-4">
                Your data is collected and used solely for legitimate purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Fulfilling and delivering orders</li>
                <li>Processing secure payments</li>
                <li>Providing customer service and order tracking</li>
                <li>Supporting B2B inquiries and partnerships</li>
                <li>Managing account settings and preferences</li>
                <li>Sending relevant promotional updates (only with your consent)</li>
                <li>Improving product offerings and website performance</li>
                <li>Analyzing user behavior for better experience (anonymized data)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-indigo-600" />
                How Your Information is Protected
              </h2>
              <p className="mb-4">
                We take data protection seriously and apply robust security measures across all touchpoints:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>SSL Encryption:</strong> All interactions on our site are encrypted via Secure Sockets Layer (SSL) technology.</li>
                <li><strong>Payment Security:</strong> All transactions are processed through trusted, PCI-compliant gateways. We do not store any card or UPI information.</li>
                <li><strong>Server Protection:</strong> Our hosting environment is fortified with firewalls, access controls, and regular audits.</li>
                <li><strong>Internal Access Controls:</strong> Sensitive data is accessible only by authorized personnel under strict confidentiality agreements.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights & Choices</h2>
              <p className="mb-4">
                You remain in control of your data. You can at any time:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Correct or update your information</li>
                <li>Ask us to delete your data (where legally permissible)</li>
                <li>Opt out of marketing communications</li>
                <li>Raise any privacy or data-related concerns</li>
              </ul>
              <p className="mb-6">
                To exercise any of these rights, please reach out to us through the Contact Us section or email us at <a href="mailto:info@qubehealthcare.online" className="text-indigo-600 hover:underline">support@qubehealthcare.in</a>. We aim to respond within 30 days.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions, privacy concerns, or data-related requests, please contact our Data Protection Officer:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Qube Health Care</h3>
                <p className="flex items-start mb-2">
                  <MapPin className="w-5 h-5 mt-1 mr-2 text-indigo-600 flex-shrink-0" />
                  <span>Door No: 08, Shop No: Q.S.L. Complex<br />Muniyappan Kovil Street, Erode – 638001<br />Tamil Nadu, India</span>
                </p>
                <p className="flex items-center mb-2">
                  <Mail className="w-5 h-5 mr-2 text-indigo-600" />
                  <a href="mailto:info@qubehealthcare.online" className="hover:underline">info@qubehealthcare.online</a>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                  <a href="tel:+917708626116" className="hover:underline">+91 77086 26116</a>
                </p>
              </div>
              <p className="mt-4 text-gray-600">
                We value your privacy and take every concern seriously. If you are not satisfied with our resolution, you may contact your local data protection authority.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Updates</h2>
              <p className="mb-4">
                We may revise this Privacy Policy periodically to reflect changes in legal requirements or business practices. All updates will be posted on this page with a revised "Last Updated" date.
              </p>
              <p className="text-gray-600 mb-8">
                <strong>Last Updated:</strong> June 26, 2025
              </p>
              <p className="text-lg">
                Thank you for trusting Qube Health Care. Your data privacy is essential to our commitment to a secure and user-friendly health and wellness experience.
              </p>
              <p className="mt-8 text-gray-500 text-sm">
                © 2025 Qube Health Care. All rights reserved.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
