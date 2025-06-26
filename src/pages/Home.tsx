import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, Globe, Award, Truck, HeartHandshake, CheckCircle, Star, Pill, Leaf, Sparkles, Heart, Loader } from 'lucide-react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { ProductService } from '../services/products';
import { transformProduct, Product } from '../types/product';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const dbProducts = await ProductService.getFeaturedProducts();
        const transformedProducts = dbProducts.map(transformProduct).slice(0, 4);
        setFeaturedProducts(transformedProducts);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Product Categories Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Explore Our Product Categories
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of healthcare products, from essential vitamins to premium skincare solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Vitamins */}
            <Link to="/products?category=vitamins" className="group">
              <div className="card-wellness bg-gradient-to-br from-yellow-50 to-yellow-100 group-hover:from-yellow-100 group-hover:to-yellow-200">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Pill className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-text-primary mb-3">Vitamins</h3>
                <p className="text-base md:text-lg text-text-secondary mb-5 leading-relaxed">Essential vitamins for daily health and wellness</p>
                <div className="flex items-center text-yellow-600 font-medium">
                  <span className="text-sm md:text-base">Explore Vitamins</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            {/* Supplements */}
            <Link to="/products?category=supplements" className="group">
              <div className="card-wellness bg-gradient-to-br from-teal-50 to-teal-100 group-hover:from-teal-100 group-hover:to-teal-200">
                <div className="w-16 h-16 bg-herbal-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-text-primary mb-3">Supplements</h3>
                <p className="text-base md:text-lg text-text-secondary mb-5 leading-relaxed">Premium supplements for optimal health support</p>
                <div className="flex items-center text-teal-600 font-medium">
                  <span className="text-sm md:text-base">Explore Supplements</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            {/* Skincare */}
            <Link to="/products?category=skincare" className="group">
              <div className="card-wellness bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-orange-100 group-hover:to-orange-200">
                <div className="w-16 h-16 bg-wellness-coral rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-text-primary mb-3">Skincare</h3>
                <p className="text-base md:text-lg text-text-secondary mb-5 leading-relaxed">Professional skincare solutions for healthy skin</p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span className="text-sm md:text-base">Explore Skincare</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            {/* Personal Care */}
            <Link to="/products?category=personal-care" className="group">
              <div className="card-wellness bg-gradient-to-br from-purple-50 to-purple-100 group-hover:from-purple-100 group-hover:to-purple-200">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-text-primary mb-3">Personal Care</h3>
                <p className="text-base md:text-lg text-text-secondary mb-5 leading-relaxed">Gentle personal care products for daily use</p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span className="text-sm md:text-base">Explore Personal Care</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Qube Section */}
      <section className="section-padding bg-gradient-wellness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Why Choose Qube Health Care?
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We're committed to providing the highest quality healthcare products with unmatched service and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-text-primary mb-4">Quality Assured</h3>
              <p className="text-text-secondary leading-relaxed">
                WHO-GMP certified facilities with strict quality control measures ensure premium products.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-text-primary mb-4">Competitive Pricing</h3>
              <p className="text-text-secondary leading-relaxed">
                Best-in-class pricing with bulk discounts and flexible payment terms for businesses.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-info rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-text-primary mb-4">Global Reach</h3>
              <p className="text-text-secondary leading-relaxed">
                Shipping to 40+ countries with reliable logistics and regulatory compliance.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <HeartHandshake className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-text-primary mb-4">Expert Support</h3>
              <p className="text-text-secondary leading-relaxed">
                Dedicated customer support team with healthcare expertise available 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Most Popular
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Featured Products
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover our most popular and trusted healthcare products, chosen by thousands of customers worldwide.
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <ProductGrid products={featuredProducts} />
          )}
          
          <div className="text-center mt-13">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center group text-sm md:text-base"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trust & Statistics Banner */}
      <section className="section-padding bg-gradient-to-r from-primary to-green-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 items-center">
            {/* Left Content - 62% width */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Globally Trusted</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Trusted by Healthcare Professionals Worldwide
              </h2>
              <p className="text-lg text-green-100 mb-10 leading-relaxed">
                Join thousands of healthcare professionals who trust Qube Health Care for their patients' wellness needs.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">10K+</div>
                  <div className="text-green-200 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">40+</div>
                  <div className="text-green-200 text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">500+</div>
                  <div className="text-green-200 text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">15+</div>
                  <div className="text-green-200 text-sm">Years Experience</div>
                </div>
              </div>
              
              <Link
                to="/bulk-quote"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 inline-flex items-center shadow-lg"
              >
                Get Bulk Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            {/* Right Content - 38% width */}
            <div className="lg:col-span-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                  alt="Healthcare Professional"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Floating Trust Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary">Certified Quality</p>
                      <p className="text-sm font-semibold text-text-primary">WHO-GMP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;