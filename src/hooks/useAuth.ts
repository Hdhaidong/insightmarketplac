import { useState, useEffect, useCallback } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import type { AppRole, UserProfile, UserRole } from '@/types/auth';

interface AuthState {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  role: AppRole | null;
  loading: boolean;
  initialized: boolean;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    profile: null,
    role: null,
    loading: true,
    initialized: false,
  });

  const fetchUserData = useCallback(async (userId: string) => {
    try {
      // Fetch profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      // Fetch role
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      return {
        profile: profile as UserProfile | null,
        role: (roleData as UserRole | null)?.role || null,
      };
    } catch (error) {
      console.error('Error fetching user data:', error);
      return { profile: null, role: null };
    }
  }, []);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event);
        
        if (session?.user) {
          // Defer data fetching to avoid blocking
          setTimeout(async () => {
            const { profile, role } = await fetchUserData(session.user.id);
            setState({
              user: session.user,
              session,
              profile,
              role,
              loading: false,
              initialized: true,
            });
          }, 0);
        } else {
          setState({
            user: null,
            session: null,
            profile: null,
            role: null,
            loading: false,
            initialized: true,
          });
        }
      }
    );

    // THEN check current session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const { profile, role } = await fetchUserData(session.user.id);
        setState({
          user: session.user,
          session,
          profile,
          role,
          loading: false,
          initialized: true,
        });
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          initialized: true,
        }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [fetchUserData]);

  const signUp = async (
    email: string,
    password: string,
    role: AppRole,
    displayName?: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          role,
          display_name: displayName,
        },
      },
    });
    return { data, error };
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!state.user) return { error: new Error('Not authenticated') };
    
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', state.user.id)
      .select()
      .single();
    
    if (!error && data) {
      setState(prev => ({ ...prev, profile: data as UserProfile }));
    }
    
    return { data, error };
  };

  return {
    ...state,
    signUp,
    signIn,
    signOut,
    updateProfile,
    isAuthenticated: !!state.user,
    isAdmin: state.role === 'admin',
    isInfluencer: state.role === 'influencer',
    isSeller: state.role === 'seller',
    isBrand: state.role === 'brand',
  };
}
