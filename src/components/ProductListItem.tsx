import React from 'react';
import { ShoppingCart, Heart, Star, Package, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { useCart } from '../hooks/useCart';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Always use minimum quantity when adding from product list
    const quantity = product.minOrderQuantity || 1;
    addItem(product, quantity);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vitamins': return 'badge-vitamins';
      case 'supplements': return 'badge-supplements';
      case 'skincare': return 'badge-skincare';
      case 'personal-care': return 'badge-personal-care';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const minQuantity = product.minOrderQuantity || 1;

  return (
    <Link 
      to={`/products/${product.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer block"
    >
      <div className="flex items-center p-6 space-x-6">
        {/* Product Image */}
        <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product.featured && (
              <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                Featured
              </span>
            )}
          </div>
          
          {/* Wishlist Button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
          >
            <Heart className="w-3 h-3 text-text-secondary hover:text-accent transition-colors" />
          </button>
        </div>

        {/* Product Information */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-semibold font-heading text-text-primary line-clamp-1">
                  {product.name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${getCategoryColor(product.category)}`}>
                  {product.category.replace('-', ' ')}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-secondary">(4.8)</span>
              </div>
            </div>
            
            <div className="text-right ml-4">
              <span className="text-2xl font-bold font-heading text-text-primary">
                ₹{product.price.toFixed(2)}
              </span>
              {minQuantity > 1 && (
                <p className="text-xs text-text-secondary mt-1">
                  Min order: {minQuantity} units (₹{minQuantity * product.price})
                </p>
              )}
            </div>
          </div>
          
          <p className="text-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          {/* Benefits Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.benefits.slice(0, 3).map((benefit, index) => (
              <span
                key={index}
                className="bg-info/10 text-info px-3 py-1 rounded-full text-xs font-medium"
              >
                {benefit}
              </span>
            ))}
          </div>
          
          {/* Bottom Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Stock Status */}
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                product.inStock 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                <CheckCircle className="w-3 h-3 mr-1" />
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              
              {/* Certifications */}
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
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                to="/bulk-quote"
                onClick={(e) => e.stopPropagation()}
                className="text-text-secondary hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface"
                title="Bulk Order"
              >
                <Package className="w-5 h-5" />
              </Link>
              
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="btn-primary flex items-center"
                title={`Add ${minQuantity} to cart`}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;