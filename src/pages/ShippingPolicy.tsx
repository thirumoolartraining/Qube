import { Truck, Clock, MapPin, Package, Globe, Phone, Mail, MessageSquare } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-xl text-gray-600">Safe, Timely & Trusted Delivery—From Erode to Your Doorstep</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Qube Health Care, we are committed to ensuring that every order—whether individual or wholesale—reaches you securely, promptly, and with the care you expect. Our Shipping Policy outlines clear guidelines on order processing, delivery timelines, tracking, and logistics.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                Order Processing Time
              </h2>
              <p className="mb-4">
                Once your order is confirmed and payment is successfully received, we begin processing within 2 to 5 business days. This includes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Product verification & quality assurance</li>
                <li>Safe, tamper-proof packaging</li>
                <li>Coordination with our delivery partners</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
                <p className="text-blue-700">
                  <strong>Note:</strong> Orders placed on weekends or public holidays are processed on the next working day. Bulk or customized B2B orders may require extended processing times; we will notify you in advance for such cases.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-indigo-600" />
                Shipping Destinations & Delivery Timelines
              </h2>
              <p className="mb-4">
                We deliver across India and to select international destinations using trusted logistics partners.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">📦 Domestic (Within India):</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Metro Cities: 3–6 business days post-dispatch</li>
                    <li>Non-Metro / Rural Areas: 5–10 business days post-dispatch</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">🌍 International:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Asia-Pacific, Middle East: 7–14 business days</li>
                    <li>North America, Europe: 10–20 business days</li>
                    <li>Other Regions: Subject to destination-specific customs and carrier timelines</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">
                Delivery estimates are approximate and may vary due to regional restrictions, customs, or courier-related delays.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Package className="w-5 h-5 mr-2 text-indigo-600" />
                Shipping Charges
              </h2>
              <p className="mb-4">
                Shipping fees are dynamically calculated based on:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Shipping destination (domestic or international)</li>
                <li>Order weight and package size</li>
                <li>Chosen shipping method</li>
                <li>Order value (some orders may qualify for free shipping)</li>
              </ul>
              <p className="mb-4">
                All applicable charges will be displayed clearly during checkout.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <p className="text-green-700 font-medium">
                  🎁 Free Shipping Offers:
                </p>
                <p className="text-green-700">
                  We occasionally run free shipping promotions for eligible domestic orders. Look out for seasonal banners and notifications on the website for details.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-indigo-600" />
                Tracking Your Order
              </h2>
              <p className="mb-4">
                Once your order is shipped, you will receive:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>A tracking ID via email, SMS, or WhatsApp</li>
                <li>A live tracking link to monitor your shipment in real-time</li>
                <li>Access to shipment details in the My Orders section (for registered users)</li>
              </ul>
              <p className="text-gray-600 text-sm">
                Please allow 24–48 hours for tracking information to update after dispatch.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delays & Exceptions</h2>
              <p className="mb-4">
                While we strive to maintain reliable delivery timelines, occasional delays may occur due to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Weather conditions or natural disasters</li>
                <li>Courier disruptions or route restrictions</li>
                <li>Customs holds for international orders</li>
                <li>Peak seasonal demand or national holidays</li>
              </ul>
              <p>
                We proactively notify you of any unexpected delays via your preferred contact method.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wholesale Shipping (B2B)</h2>
              <p className="mb-4">
                For bulk orders and B2B clients, shipping terms, handling times, and logistics coordination may vary.
              </p>
              <p className="mb-4">
                Our Wholesale Support Team can assist with:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Freight and carrier arrangements</li>
                <li>Bulk packaging optimization</li>
                <li>Export compliance and documentation</li>
                <li>CIF/FOB discussions and third-party logistics</li>
              </ul>
              <p>
                Please contact us directly for customized coordination on large-volume shipments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help with Your Shipment?</h2>
              <p className="mb-6">
                Our dedicated support team is here to help with any shipping-related concerns. Reach out to us through any of the following:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <p className="flex items-start">
                        <Mail className="w-5 h-5 mr-2 mt-1 text-indigo-600 flex-shrink-0" />
                        <a href="mailto:info@qubehealthcare.online" className="hover:underline">info@qubehealthcare.online</a>
                      </p>
                      <p className="flex items-start">
                        <Phone className="w-5 h-5 mr-2 mt-1 text-indigo-600 flex-shrink-0" />
                        <a href="tel:+917708626116" className="hover:underline">+91 77086 26116</a>
                      </p>
                      <p className="flex items-start">
                        <MessageSquare className="w-5 h-5 mr-2 mt-1 text-indigo-600 flex-shrink-0" />
                        <span>Live Chat: Mon–Sat, 10 AM – 6 PM IST</span>
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
                
                <p className="mt-6 text-center">
                  Or visit our <a href="/contact" className="text-indigo-600 hover:underline font-medium">Contact Us</a> page for more support options.
                </p>
              </div>
              
              <p className="mt-8 text-center text-gray-600">
                Thank you for choosing Qube Health Care. Whether it's wellness at home or wholesale fulfillment, we are committed to delivering health—safely and reliably.
              </p>
              
              <p className="mt-12 text-center text-sm text-gray-500">
                Last Updated: June 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
