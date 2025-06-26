import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Globe, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-wellness overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-21">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 items-center">
          {/* Left Content - 62% width following Golden Ratio */}
          <div className="lg:col-span-5">
            <div className="max-w-2xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-text-primary">Trusted by 10,000+ Healthcare Professionals</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold font-heading text-text-primary leading-tight mb-8">
                Premium Healthcare
                <span className="text-primary block">Solutions Worldwide</span>
              </h1>
              
              <p className="text-base md:text-lg text-text-secondary mb-10 leading-relaxed max-w-xl">
                Trusted distributor and exporter of generic medicines, vitamins, supplements, 
                and personal care products. Serving healthcare professionals and consumers in 40+ countries 
                with WHO-GMP certified quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-13">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center justify-center group text-sm md:text-base"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/bulk-quote"
                  className="btn-secondary inline-flex items-center justify-center text-sm md:text-base"
                >
                  Request Bulk Quote
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">WHO-GMP Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">ISO 9001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">FDA Approved</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - 38% width following Golden Ratio */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=800&fit=crop"
                  alt="Premium Healthcare Products"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold font-heading text-primary">10K+</p>
                      <p className="text-xs text-text-secondary">Happy Customers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold font-heading text-primary">40+</p>
                      <p className="text-xs text-text-secondary">Countries Served</p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-3">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-primary rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-accent rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-info rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-white font-bold">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-info/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}