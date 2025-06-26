import { supabase } from '../lib/supabase';
import { Database } from '../lib/supabase-types';

type UserProfile = Database['public']['Tables']['user_profiles']['Row'];
type UserProfileInsert = Database['public']['Tables']['user_profiles']['Insert'];
type UserProfileUpdate = Database['public']['Tables']['user_profiles']['Update'];

export interface SignUpData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export class AuthService {
  // Sign up with email and password
  static async signUp(signUpData: SignUpData) {
    const { data, error } = await supabase.auth.signUp({
      email: signUpData.email,
      password: signUpData.password,
      options: {
        data: {
          first_name: signUpData.firstName,
          last_name: signUpData.lastName,
          company: signUpData.company,
          phone: signUpData.phone,
        }
      }
    });

    if (error) {
      console.error('Error signing up:', error);
      throw new Error(error.message);
    }

    // Create user profile if user was created
    if (data.user) {
      await this.createUserProfile({
        id: data.user.id,
        first_name: signUpData.firstName || null,
        last_name: signUpData.lastName || null,
        company: signUpData.company || null,
        phone: signUpData.phone || null,
      });
    }

    return data;
  }

  // Sign in with email and password
  static async signIn(signInData: SignInData) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: signInData.email,
      password: signInData.password,
    });

    if (error) {
      console.error('Error signing in:', error);
      throw new Error(error.message);
    }

    return data;
  }

  // Sign out
  static async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error signing out:', error);
      throw new Error(error.message);
    }
  }

  // Get current user
  static async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Error getting current user:', error);
      throw new Error(error.message);
    }

    return user;
  }

  // Get user profile
  static async getUserProfile(): Promise<UserProfile | null> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return null;
    }

    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // Profile not found
      }
      console.error('Error fetching user profile:', error);
      throw new Error('Failed to fetch user profile');
    }

    return data;
  }

  // Create user profile
  static async createUserProfile(profile: UserProfileInsert): Promise<UserProfile> {
    const { data, error } = await supabase
      .from('user_profiles')
      .insert(profile)
      .select()
      .single();

    if (error) {
      console.error('Error creating user profile:', error);
      throw new Error('Failed to create user profile');
    }

    return data;
  }

  // Update user profile
  static async updateUserProfile(updates: UserProfileUpdate): Promise<UserProfile> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User must be authenticated');
    }

    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating user profile:', error);
      throw new Error('Failed to update user profile');
    }

    return data;
  }

  // Reset password
  static async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      console.error('Error resetting password:', error);
      throw new Error(error.message);
    }
  }

  // Update password
  static async updatePassword(newPassword: string) {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      console.error('Error updating password:', error);
      throw new Error(error.message);
    }
  }
}