import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Shield, Award, Globe } from 'lucide-react';
import qubeLogo from '../assets/images/qube-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img 
                  src={qubeLogo} 
                  alt="Qube Health Care Logo" 
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.outerHTML = '<div class="text-lg font-bold text-white">Qube Health Care</div>';
                  }}
                />
              </Link>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Trusted distributor and exporter of premium healthcare products, 
              serving customers worldwide with quality medicines and supplements.
            </p>
            
            {/* Certifications */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs font-medium">WHO-GMP</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-medium">ISO 9001</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-info" />
                <span className="text-xs font-medium">FDA</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/bulk-quote" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Bulk Orders</Link></li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Product Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/products?category=vitamins" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Vitamins</Link></li>
              <li><Link to="/products?category=supplements" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Supplements</Link></li>
              <li><Link to="/products?category=skincare" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Skincare</Link></li>
              <li><Link to="/products?category=personal-care" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Personal Care</Link></li>
              <li><Link to="/products?category=featured" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Featured Products</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">+91 77086 26116</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM IST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">info@qubehealthcare.online</p>
                  <p className="text-gray-400 text-sm">24/7 Email Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Door No 08, Shop no: Q.S.L.Complex</p>
                  <p className="text-gray-300">Muniyappan kovil street, Erode 638001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Qube Health Care. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link to="/shipping-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Shipping Policy
              </Link>
              <Link to="/cancellation-refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cancellation & Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;