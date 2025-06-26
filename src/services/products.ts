import { products as localProducts } from '../data/products';
import { Product } from '../types/product';

type ProductInsert = Omit<Product, 'id' | 'created_at' | 'updated_at'> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

type ProductUpdate = Partial<ProductInsert>; 

// In-memory storage for products
let products = [...localProducts];

export class ProductService {
  // Get all products
  static async getProducts(): Promise<Product[]> {
    // Sort by featured first, then by creation date (newest first)
    return [...products].sort((a, b) => {
      if (a.featured === b.featured) {
        return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
      }
      return a.featured ? -1 : 1;
    });
  }

  // Get product by ID
  static async getProductById(id: string): Promise<Product | null> {
    const product = products.find(p => p.id === id);
    return product || null;
  }

  // Get products by category
  static async getProductsByCategory(category: string): Promise<Product[]> {
    return products
      .filter(p => p.category === category)
      .sort((a, b) => {
        if (a.featured === b.featured) {
          return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
        }
        return a.featured ? -1 : 1;
      });
  }

  // Get featured products
  static async getFeaturedProducts(): Promise<Product[]> {
    return products
      .filter(p => p.featured && p.inStock)
      .sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());
  }

  // Search products
  static async searchProducts(searchTerm: string): Promise<Product[]> {
    const term = searchTerm.toLowerCase();
    return products
      .filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      )
      .sort((a, b) => {
        if (a.featured === b.featured) {
          return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
        }
        return a.featured ? -1 : 1;
      });
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
    let result = [...products];

    // Apply filters
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.featured !== undefined) {
      result = result.filter(p => p.featured === filters.featured);
    }

    if (filters.inStock !== undefined) {
      result = result.filter(p => p.inStock === filters.inStock);
    }

    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    const sortBy = filters.sortBy || 'created_at';
    const sortOrder = filters.sortOrder || 'desc';
    
    return result.sort((a, b) => {
      // Featured products first
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      // Then sort by the specified field
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        comparison = a.price - b.price;
      } else { // created_at
        const aDate = new Date(a.created_at || 0).getTime();
        const bDate = new Date(b.created_at || 0).getTime();
        comparison = aDate - bDate;
      }

      // Apply sort order
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }

  // Create product (admin only)
  static async createProduct(productData: ProductInsert): Promise<Product> {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    products.push(newProduct);
    return newProduct;
  }

  // Update product (admin only)
  static async updateProduct(id: string, updates: ProductUpdate): Promise<Product> {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    const updatedProduct = {
      ...products[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    
    products[index] = updatedProduct;
    return updatedProduct;
  }

  // Delete product (admin only)
  static async deleteProduct(id: string): Promise<void> {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    products.splice(index, 1);
  }
}