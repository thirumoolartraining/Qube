import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-green-700 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              About Qube Health Care
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your Trusted Partner in Premium Healthcare Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
                Committed to Health & Wellness Since 2010
              </h2>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Founded in Erode, Tamil Nadu, Qube Health Care has grown from a local healthcare provider to a globally recognized distributor and exporter of premium healthcare products. Our journey began with a simple mission: to make quality healthcare accessible to all.
                </p>
                <p>
                  Today, we serve customers in over 40 countries, providing a wide range of pharmaceutical formulations, nutraceuticals, and personal care products that meet the highest international standards.
                </p>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <p className="italic text-green-800">
                    "At Qube Health Care, we carefully curate and distribute premium healthcare solutions that enhance lives and promote well-being across the globe."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
                  alt="Qube Health Care Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Facility</h3>
                  <p className="text-green-200">WHO-GMP Certified Manufacturing Unit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <span>Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              The Pillars of Our Success
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Guiding principles that shape everything we do at Qube Health Care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: 'Quality First',
                description: 'We maintain the highest quality standards with WHO-GMP, ISO, and FDA certifications.'
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: 'Innovation',
                description: 'Continuous research and development to bring you cutting-edge healthcare solutions.'
              },
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: 'Customer Care',
                description: 'Your health and satisfaction are at the heart of everything we do.'
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: 'Global Reach',
                description: 'Serving customers in over 40 countries with reliable healthcare products.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Dedicated professionals committed to your health and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Chief Medical Officer',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Priya Sharma',
                role: 'Head of Research',
                image: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                name: 'Vikram Patel',
                role: 'Production Head',
                image: 'https://randomuser.me/api/portraits/men/22.jpg'
              },
              {
                name: 'Ananya Reddy',
                role: 'Quality Control',
                image: 'https://randomuser.me/api/portraits/women/63.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative overflow-hidden rounded-xl mb-6 h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white text-left">
                      <h4 className="font-bold text-lg">{member.name}</h4>
                      <p className="text-green-200">{member.role}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{member.name}</h3>
                <p className="text-text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Experience the Qube Difference?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of satisfied customers who trust Qube Health Care for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/products"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 hover:scale-105 inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
