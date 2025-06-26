import { supabase } from '../lib/supabase';
import { Database } from '../lib/supabase-types';
import { CartItem } from '../types/product';

type Order = Database['public']['Tables']['orders']['Row'];
type OrderInsert = Database['public']['Tables']['orders']['Insert'];
type OrderItem = Database['public']['Tables']['order_items']['Row'];
type OrderItemInsert = Database['public']['Tables']['order_items']['Insert'];

export interface CreateOrderData {
  shipping_address: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
  };
  order_notes?: string;
  items: CartItem[];
}

export class OrderService {
  // Create a new order
  static async createOrder(orderData: CreateOrderData): Promise<Order> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User must be authenticated to create an order');
    }

    // Calculate total amount
    const totalAmount = orderData.items.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );

    // Create the order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        total_amount: totalAmount,
        shipping_address: orderData.shipping_address,
        order_notes: orderData.order_notes,
        status: 'pending'
      })
      .select()
      .single();

    if (orderError) {
      console.error('Error creating order:', orderError);
      throw new Error('Failed to create order');
    }

    // Create order items
    const orderItems: OrderItemInsert[] = orderData.items.map(item => ({
      order_id: order.id,
      product_id: item.product.id,
      quantity: item.quantity,
      unit_price: item.product.price,
      total_price: item.product.price * item.quantity
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) {
      console.error('Error creating order items:', itemsError);
      // Rollback order creation
      await supabase.from('orders').delete().eq('id', order.id);
      throw new Error('Failed to create order items');
    }

    return order;
  }

  // Get user's orders
  static async getUserOrders(): Promise<Order[]> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User must be authenticated');
    }

    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching user orders:', error);
      throw new Error('Failed to fetch orders');
    }

    return data || [];
  }

  // Get order by ID with items
  static async getOrderById(orderId: string): Promise<Order & { items: (OrderItem & { product: any })[] } | null> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User must be authenticated');
    }

    // Get order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .eq('user_id', user.id)
      .single();

    if (orderError) {
      if (orderError.code === 'PGRST116') {
        return null; // Order not found
      }
      console.error('Error fetching order:', orderError);
      throw new Error('Failed to fetch order');
    }

    // Get order items with product details
    const { data: items, error: itemsError } = await supabase
      .from('order_items')
      .select(`
        *,
        product:products(*)
      `)
      .eq('order_id', orderId);

    if (itemsError) {
      console.error('Error fetching order items:', itemsError);
      throw new Error('Failed to fetch order items');
    }

    return {
      ...order,
      items: items || []
    };
  }

  // Update order status (admin only)
  static async updateOrderStatus(orderId: string, status: Order['status']): Promise<Order> {
    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', orderId)
      .select()
      .single();

    if (error) {
      console.error('Error updating order status:', error);
      throw new Error('Failed to update order status');
    }

    return data;
  }

  // Cancel order
  static async cancelOrder(orderId: string): Promise<Order> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User must be authenticated');
    }

    const { data, error } = await supabase
      .from('orders')
      .update({ status: 'cancelled' })
      .eq('id', orderId)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Error cancelling order:', error);
      throw new Error('Failed to cancel order');
    }

    return data;
  }
}