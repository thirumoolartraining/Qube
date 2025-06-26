import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '917708626116'; // Updated WhatsApp number
    const message = 'Hello! I have a question about your healthcare products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-success-green hover:bg-success-green-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 group animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-text-primary text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-text-primary"></div>
      </div>
      
      {/* Gentle pulse animation */}
      <div className="absolute inset-0 bg-success-green rounded-full animate-gentle-pulse"></div>
    </button>
  );
};

export default WhatsAppFloat;