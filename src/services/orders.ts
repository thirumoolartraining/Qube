import { CartItem } from '../types/product';

type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  user_id: string;
  total_amount: number;
  status: OrderStatus;
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
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  created_at: string;
}

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

// Local storage keys
const ORDERS_STORAGE_KEY = 'qube_orders';
const ORDER_ITEMS_STORAGE_KEY = 'qube_order_items';

// Helper functions for local storage
const getOrders = (): Order[] => {
  if (typeof window === 'undefined') return [];
  const ordersJson = localStorage.getItem(ORDERS_STORAGE_KEY);
  return ordersJson ? JSON.parse(ordersJson) : [];
};

const getOrderItems = (): OrderItem[] => {
  if (typeof window === 'undefined') return [];
  const itemsJson = localStorage.getItem(ORDER_ITEMS_STORAGE_KEY);
  return itemsJson ? JSON.parse(itemsJson) : [];
};

export class OrderService {
  // Create a new order
  static async createOrder(orderData: CreateOrderData, userId: string): Promise<Order> {
    if (!userId) {
      throw new Error('User must be authenticated to create an order');
    }

    // Calculate total amount
    const totalAmount = orderData.items.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );

    // Create the order
    const newOrder: Order = {
      id: `order_${Date.now()}`,
      user_id: userId,
      total_amount: totalAmount,
      shipping_address: orderData.shipping_address,
      order_notes: orderData.order_notes,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Save order to local storage
    const orders = getOrders();
    orders.push(newOrder);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));

    // Create order items
    const orderItems = getOrderItems();
    const newOrderItems = orderData.items.map(item => ({
      id: `order_item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      order_id: newOrder.id,
      product_id: item.product.id,
      quantity: item.quantity,
      price: item.product.price,
      created_at: new Date().toISOString()
    }));

    orderItems.push(...newOrderItems);
    localStorage.setItem(ORDER_ITEMS_STORAGE_KEY, JSON.stringify(orderItems));

    return newOrder;
  }

  // Get orders for the current user
  static async getUserOrders(userId: string): Promise<Order[]> {
    if (!userId) {
      throw new Error('User must be authenticated to view orders');
    }

    const orders = getOrders();
    return orders
      .filter(order => order.user_id === userId)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  // Get order by ID with items
  static async getOrderById(orderId: string, userId: string): Promise<{
    order: Order;
    items: Array<OrderItem & { product: any }>;
  }> {
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId && o.user_id === userId);

    if (!order) {
      throw new Error('Order not found');
    }

    // Note: In a real app, you would fetch the product details from your products service
    const orderItems = getOrderItems().filter(item => item.order_id === orderId);
    const itemsWithProducts = orderItems.map(item => ({
      ...item,
      product: { id: item.product_id, price: item.price } // Simplified product data
    }));

    return {
      order,
      items: itemsWithProducts
    };
  }

  // Update order status
  static async updateOrderStatus(orderId: string, status: OrderStatus, userId: string): Promise<Order> {
    const orders = getOrders();
    const orderIndex = orders.findIndex(o => o.id === orderId && o.user_id === userId);
    
    if (orderIndex === -1) {
      throw new Error('Order not found');
    }

    const updatedOrder = {
      ...orders[orderIndex],
      status,
      updated_at: new Date().toISOString()
    };

    orders[orderIndex] = updatedOrder;
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));

    return updatedOrder;
  }

  // Cancel order
  static async cancelOrder(orderId: string, userId: string): Promise<Order> {
    const orders = getOrders();
    const orderIndex = orders.findIndex(o => o.id === orderId && o.user_id === userId);
    
    if (orderIndex === -1) {
      throw new Error('Order not found');
    }

    // Only allow cancelling pending orders
    if (orders[orderIndex].status !== 'pending') {
      throw new Error('Only pending orders can be cancelled');
    }

    // Update the order status to cancelled
    const updatedOrder = {
      ...orders[orderIndex],
      status: 'cancelled' as OrderStatus,
      updated_at: new Date().toISOString()
    };

    // Save the updated order
    orders[orderIndex] = updatedOrder;
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));

    return updatedOrder;
  }
}