import { supabase } from '../lib/supabase';
import { Database } from '../lib/supabase-types';

type Product = Database['public']['Tables']['products']['Row'];
type ProductInsert = Database['public']['Tables']['products']['Insert'];
type ProductUpdate = Database['public']['Tables']['products']['Update'];

export class ProductService {
  // Get all products
  static async getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }

    return data || [];
  }

  // Get product by ID
  static async getProductById(id: string): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // Product not found
      }
      console.error('Error fetching product:', error);
      throw new Error('Failed to fetch product');
    }

    return data;
  }

  // Get products by category
  static async getProductsByCategory(category: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products by category:', error);
      throw new Error('Failed to fetch products by category');
    }

    return data || [];
  }

  // Get featured products
  static async getFeaturedProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .eq('in_stock', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured products:', error);
      throw new Error('Failed to fetch featured products');
    }

    return data || [];
  }

  // Search products
  static async searchProducts(searchTerm: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching products:', error);
      throw new Error('Failed to search products');
    }

    return data || [];
  }

  // Get products with filters
  static async getProductsWithFilters(filters: {
    category?: string;
    featured?: boolean;
    inStock?: boolean;
    searchTerm?: string;
    sortBy?: 'name' | 'price' | 'created_at';
    sortOrder?: 'asc' | 'desc';
  }): Promise<Product[]> {
    let query = supabase.from('products').select('*');

    // Apply filters
    if (filters.category) {
      query = query.eq('category', filters.category);
    }

    if (filters.featured !== undefined) {
      query = query.eq('featured', filters.featured);
    }

    if (filters.inStock !== undefined) {
      query = query.eq('in_stock', filters.inStock);
    }

    if (filters.searchTerm) {
      query = query.or(`name.ilike.%${filters.searchTerm}%,description.ilike.%${filters.searchTerm}%`);
    }

    // Apply sorting
    const sortBy = filters.sortBy || 'created_at';
    const sortOrder = filters.sortOrder || 'desc';
    
    if (sortBy === 'name') {
      query = query.order('name', { ascending: sortOrder === 'asc' });
    } else if (sortBy === 'price') {
      query = query.order('price', { ascending: sortOrder === 'asc' });
    } else {
      // Default sort: featured first, then by creation date
      query = query
        .order('featured', { ascending: false })
        .order('created_at', { ascending: sortOrder === 'asc' });
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching products with filters:', error);
      throw new Error('Failed to fetch products');
    }

    return data || [];
  }

  // Create product (admin only)
  static async createProduct(product: ProductInsert): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single();

    if (error) {
      console.error('Error creating product:', error);
      throw new Error('Failed to create product');
    }

    return data;
  }

  // Update product (admin only)
  static async updateProduct(id: string, updates: ProductUpdate): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating product:', error);
      throw new Error('Failed to update product');
    }

    return data;
  }

  // Delete product (admin only)
  static async deleteProduct(id: string): Promise<void> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting product:', error);
      throw new Error('Failed to delete product');
    }
  }
}