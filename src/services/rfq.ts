// Local storage key for RFQ requests
const RFQ_STORAGE_KEY = 'qube_rfq_requests';

type RFQStatus = 'pending' | 'in_progress' | 'completed' | 'rejected';

export interface RFQRequest {
  id: string;
  user_id: string | null;
  name: string;
  email: string;
  company: string;
  phone: string;
  product_interest: string;
  quantity: number;
  message: string;
  status: RFQStatus;
  created_at: string;
  updated_at: string;
}

// Helper functions for local storage
const getRFQs = (): RFQRequest[] => {
  if (typeof window === 'undefined') return [];
  const rfqsJson = localStorage.getItem(RFQ_STORAGE_KEY);
  return rfqsJson ? JSON.parse(rfqsJson) : [];
};


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
  static async createRFQ(rfqData: CreateRFQData, userId?: string): Promise<RFQRequest> {
    const now = new Date().toISOString();
    
    const newRFQ: RFQRequest = {
      id: `rfq_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      user_id: userId || null,
      ...rfqData,
      status: 'pending',
      created_at: now,
      updated_at: now
    };

    // Save to local storage
    const rfqs = getRFQs();
    rfqs.push(newRFQ);
    localStorage.setItem(RFQ_STORAGE_KEY, JSON.stringify(rfqs));

    return newRFQ;
  }

  // Get user's RFQ requests
  static async getUserRFQs(userId: string): Promise<RFQRequest[]> {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const rfqs = getRFQs();
    return rfqs
      .filter(rfq => rfq.user_id === userId)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  // Get all RFQ requests (for admin)
  static async getAllRFQs(): Promise<RFQRequest[]> {
    const rfqs = getRFQs();
    return rfqs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }
}