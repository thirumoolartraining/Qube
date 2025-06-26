import { Database } from '../lib/supabase-types';

// Use Supabase types as the source of truth
export type Product = Database['public']['Tables']['products']['Row'] & {
  // Map database fields to frontend expectations
  image: string; // Maps to image_url
  category: 'supplements' | 'skincare' | 'vitamins' | 'personal-care';
  inStock: boolean; // Maps to in_stock
  minOrderQuantity: number; // Maps to min_order_quantity
};

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

// Helper function to transform database product to frontend product
export const transformProduct = (dbProduct: Database['public']['Tables']['products']['Row']): Product => {
  return {
    ...dbProduct,
    image: dbProduct.image_url,
    inStock: dbProduct.in_stock,
    minOrderQuantity: dbProduct.min_order_quantity,
  };
};

// Helper function to transform frontend product to database product
export const transformProductForDB = (product: Partial<Product>): Partial<Database['public']['Tables']['products']['Insert']> => {
  const { image, inStock, minOrderQuantity, ...rest } = product;
  return {
    ...rest,
    image_url: image,
    in_stock: inStock,
    min_order_quantity: minOrderQuantity,
  };
};