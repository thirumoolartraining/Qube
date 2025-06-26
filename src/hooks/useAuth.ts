import { useState, useEffect } from 'react';

type User = {
  id: string;
  email: string;
  user_metadata?: {
    name?: string;
    avatar_url?: string;
  };
};

type UserProfile = {
  id: string;
  user_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  company?: string;
  phone?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
};

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  // Check for existing session in localStorage on initial load
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user');
      const storedProfile = localStorage.getItem('userProfile');
      
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      }
    };
    
    checkAuth();
  }, []);

  const signIn = async ({ email, password }: SignInData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any non-empty password
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      
      const mockUser: User = {
        id: `user-${Date.now()}`,
        email,
        user_metadata: {
          name: email.split('@')[0],
        },
      };
      
      const mockProfile: UserProfile = {
        id: `profile-${Date.now()}`,
        user_id: mockUser.id,
        first_name: email.split('@')[0],
        email: email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      
      // Save to local storage
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('userProfile', JSON.stringify(mockProfile));
      
      // Update state
      setUser(mockUser);
      setProfile(mockProfile);
      
      return { data: { user: mockUser, profile: mockProfile }, error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (signUpData: SignUpData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!signUpData.email || !signUpData.password) {
        throw new Error('Email and password are required');
      }
      
      const mockUser: User = {
        id: `user-${Date.now()}`,
        email: signUpData.email,
        user_metadata: {
          name: signUpData.firstName || signUpData.email.split('@')[0],
        },
      };
      
      const mockProfile: UserProfile = {
        id: `profile-${Date.now()}`,
        user_id: mockUser.id,
        first_name: signUpData.firstName,
        last_name: signUpData.lastName,
        company: signUpData.company,
        phone: signUpData.phone,
        email: signUpData.email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      
      // Save to local storage
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('userProfile', JSON.stringify(mockProfile));
      
      // Update state
      setUser(mockUser);
      setProfile(mockProfile);
      
      return { data: { user: mockUser, profile: mockProfile }, error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      // Clear local storage
      localStorage.removeItem('user');
      localStorage.removeItem('userProfile');
      
      // Update state
      setUser(null);
      setProfile(null);
      
      return { error: null };
    } catch (error) {
      console.error('Sign out error:', error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return { error: 'Not authenticated' };
    
    setLoading(true);
    try {
      const updatedProfile = {
        ...profile,
        ...updates,
        updated_at: new Date().toISOString(),
      } as UserProfile;
      
      // Save to local storage
      localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      
      // Update state
      setProfile(updatedProfile);
      
      return { data: updatedProfile, error: null };
    } catch (error) {
      console.error('Update profile error:', error);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
    isAuthenticated: !!user
  };
};