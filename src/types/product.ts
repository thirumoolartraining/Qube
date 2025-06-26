export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'supplements' | 'skincare' | 'vitamins' | 'personal-care';
  inStock: boolean;
  minOrderQuantity: number;
  orderIncrement: number;
  featured: boolean;
  rating: number;
  numReviews: number;
  created_at: string;
  updated_at: string;
  benefits?: string[];
  ingredients?: string[];
  tags?: string[];
  certifications?: string[];
  // Additional fields that might be used in the application
  image_url?: string;
  in_stock?: boolean;
  min_order_quantity?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RFQRequest {
  id?: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  productInterest: string;
  quantity: number;
  message: string;
  createdAt?: string;
}

export interface CheckoutData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  orderNotes?: string;
}

// Helper function to transform product data to ensure consistency
export const transformProduct = (product: Partial<Product>): Product => {
  return {
    id: product.id || '',
    name: product.name || '',
    description: product.description || '',
    price: product.price || 0,
    image: product.image || product.image_url || '',
    category: product.category || 'supplements',
    inStock: product.inStock ?? product.in_stock ?? true,
    minOrderQuantity: product.minOrderQuantity ?? product.min_order_quantity ?? 20,
    orderIncrement: (product as any).orderIncrement ?? 10,
    featured: product.featured || false,
    rating: product.rating || 0,
    numReviews: product.numReviews || 0,
    created_at: product.created_at || new Date().toISOString(),
    updated_at: product.updated_at || new Date().toISOString(),
  };
};
