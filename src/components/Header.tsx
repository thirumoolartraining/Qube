import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Mail, Globe } from 'lucide-react';
const qubeLogo = './images/products/qube-logo.png';
import { useCart } from '../hooks/useCart';

const Header: React.FC = () => {
  const { getTotalItems, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 77086 26116</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@qubehealthcare.online</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span className="bg-success-green/10 text-success-green-text px-3 py-1 rounded-full text-xs font-semibold">
              🌍 Shipping to 40+ Countries
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center h-full">
              <img 
                src={qubeLogo} 
                alt="Qube Health Care Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  // Fallback in case the image fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.outerHTML = '<div class="text-xl font-bold text-primary">Qube Health Care</div>';
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-200 relative group ${
                  isActiveLink('/') 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  isActiveLink('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/products" 
                className={`font-medium transition-colors duration-200 relative group ${
                  isActiveLink('/products') 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                Products
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  isActiveLink('/products') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/bulk-quote" 
                className={`font-medium transition-colors duration-200 relative group ${
                  isActiveLink('/bulk-quote') 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                Bulk Orders
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  isActiveLink('/bulk-quote') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors duration-200 relative group ${
                  isActiveLink('/about') 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                About Us
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  isActiveLink('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors duration-200 relative group ${
                  isActiveLink('/contact') 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  isActiveLink('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={openCart}
                className="relative p-3 text-text-secondary hover:text-primary transition-colors duration-200 hover:bg-surface rounded-lg"
                aria-label={`Shopping cart with ${getTotalItems()} items`}
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-md"
                    aria-live="polite"
                  >
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 text-text-secondary hover:text-primary transition-colors duration-200 hover:bg-surface rounded-lg"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActiveLink('/') 
                    ? 'text-primary bg-surface' 
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActiveLink('/products') 
                    ? 'text-primary bg-surface' 
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/bulk-quote"
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActiveLink('/bulk-quote') 
                    ? 'text-primary bg-surface' 
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Bulk Orders
              </Link>
              <Link
                to="/about"
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActiveLink('/about') 
                    ? 'text-primary bg-surface' 
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActiveLink('/contact') 
                    ? 'text-primary bg-surface' 
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;