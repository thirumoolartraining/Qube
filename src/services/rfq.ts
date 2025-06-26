import { supabase } from '../lib/supabase';
import { Database } from '../lib/supabase-types';

type RFQRequest = Database['public']['Tables']['rfq_requests']['Row'];
type RFQInsert = Database['public']['Tables']['rfq_requests']['Insert'];

export interface CreateRFQData {
  name: string;
  email: string;
  company: string;
  phone: string;
  product_interest: string;
  quantity: number;
  message: string;
}

export class RFQService {
  // Create a new RFQ request
  static async createRFQ(rfqData: CreateRFQData): Promise<RFQRequest> {
    const { data: { user } } = await supabase.auth.getUser();

    const rfqInsert: RFQInsert = {
      ...rfqData,
      user_id: user?.id || null,
      status: 'pending'
    };

    const { data, error } = await supabase
      .from('rfq_requests')
      .insert(rfqInsert)
      .select()
      .single();

    if (error) {
      console.error('Error creating RFQ request:', error);
      throw new Error('Failed to create RFQ request');
    }

    return data;
  }

  // Get user's RFQ requests
  static async getUserRFQs(): Promise<RFQRequest[]> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User must be authenticated');
    }

    const { data, error } = await supabase
      .from('rfq_requests')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching user RFQs:', error);
      throw new Error('Failed to fetch RFQ requests');
    }

    return data || [];
  }

  // Get RFQ by ID
  static async getRFQById(rfqId: string): Promise<RFQRequest | null> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User must be authenticated');
    }

    const { data, error } = await supabase
      .from('rfq_requests')
      .select('*')
      .eq('id', rfqId)
      .eq('user_id', user.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // RFQ not found
      }
      console.error('Error fetching RFQ:', error);
      throw new Error('Failed to fetch RFQ request');
    }

    return data;
  }

  // Update RFQ status (admin only)
  static async updateRFQStatus(rfqId: string, status: RFQRequest['status']): Promise<RFQRequest> {
    const { data, error } = await supabase
      .from('rfq_requests')
      .update({ status })
      .eq('id', rfqId)
      .select()
      .single();

    if (error) {
      console.error('Error updating RFQ status:', error);
      throw new Error('Failed to update RFQ status');
    }

    return data;
  }

  // Get all RFQ requests (admin only)
  static async getAllRFQs(): Promise<RFQRequest[]> {
    const { data, error } = await supabase
      .from('rfq_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching all RFQs:', error);
      throw new Error('Failed to fetch RFQ requests');
    }

    return data || [];
  }
}