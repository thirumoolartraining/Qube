import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Always use minimum quantity when adding from product card
    const quantity = product.minOrderQuantity || 1;
    addItem(product, quantity);
  };

  const minQuantity = product.minOrderQuantity || 1;

  return (
    <div 
      className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer h-full"
    >
      {/* Image Section */}
      <div className="relative pt-[100%] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        

        
        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
        >
          <Heart className="w-4 h-4 text-text-secondary hover:text-accent transition-colors" />
        </button>
        
        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white p-3 rounded-full hover:bg-green-700 transition-all duration-200 shadow-lg hover:scale-110"
            title={`Add ${minQuantity} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Content Section - 38.2% of card height following Golden Ratio */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
          <h3 
            className="text-lg font-semibold font-heading text-text-primary line-clamp-2 min-h-[2.5rem]"
            title={product.name}
          >
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
            <span className="text-sm text-text-secondary font-medium whitespace-nowrap">4.8</span>
          </div>
        </div>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        {/* Benefits Pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <span
              key={index}
              className="bg-info/10 text-info px-3 py-1 rounded-full text-xs font-medium"
            >
              {benefit}
            </span>
          ))}
        </div>
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-heading text-text-primary">
₹{product.price.toFixed(2)}
              </span>
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="btn-primary"
            title={`Add ${minQuantity} to cart`}
          >
            Add to Cart
          </button>
        </div>
        
        {/* Stock Status and Certifications */}
        <div className="flex items-center justify-between">
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
            product.inStock 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          
          {product.certifications && (
            <div className="flex space-x-1">
              {product.certifications.slice(0, 2).map((cert, index) => (
                <span
                  key={index}
                  className="trust-badge text-xs px-2 py-1"
                >
                  {cert}
                </span>
              ))}
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

export default ProductCard;