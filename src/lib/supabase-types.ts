export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          description: string;
          price: number;
          image_url: string;
          category: 'vitamins' | 'supplements' | 'skincare' | 'personal-care';
          tags: string[];
          benefits: string[];
          ingredients: string[];
          in_stock: boolean;
          featured: boolean;
          min_order_quantity: number;
          certifications: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          price: number;
          image_url: string;
          category: 'vitamins' | 'supplements' | 'skincare' | 'personal-care';
          tags?: string[];
          benefits?: string[];
          ingredients?: string[];
          in_stock?: boolean;
          featured?: boolean;
          min_order_quantity?: number;
          certifications?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          price?: number;
          image_url?: string;
          category?: 'vitamins' | 'supplements' | 'skincare' | 'personal-care';
          tags?: string[];
          benefits?: string[];
          ingredients?: string[];
          in_stock?: boolean;
          featured?: boolean;
          min_order_quantity?: number;
          certifications?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          first_name: string | null;
          last_name: string | null;
          company: string | null;
          phone: string | null;
          address: any | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          first_name?: string | null;
          last_name?: string | null;
          company?: string | null;
          phone?: string | null;
          address?: any | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string | null;
          last_name?: string | null;
          company?: string | null;
          phone?: string | null;
          address?: any | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string | null;
          status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          total_amount: number;
          shipping_address: any;
          order_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          total_amount: number;
          shipping_address: any;
          order_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          total_amount?: number;
          shipping_address?: any;
          order_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string | null;
          product_id: string | null;
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id?: string | null;
          product_id?: string | null;
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string | null;
          product_id?: string | null;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
          created_at?: string;
        };
      };
      rfq_requests: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          email: string;
          company: string;
          phone: string;
          product_interest: string;
          quantity: number;
          message: string;
          status: 'pending' | 'reviewed' | 'quoted' | 'closed';
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          name: string;
          email: string;
          company: string;
          phone: string;
          product_interest: string;
          quantity: number;
          message: string;
          status?: 'pending' | 'reviewed' | 'quoted' | 'closed';
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          name?: string;
          email?: string;
          company?: string;
          phone?: string;
          product_interest?: string;
          quantity?: number;
          message?: string;
          status?: 'pending' | 'reviewed' | 'quoted' | 'closed';
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};