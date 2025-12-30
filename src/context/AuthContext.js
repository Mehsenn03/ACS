import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

const AuthContext = createContext(null);

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const isEmailWhitelisted = async (email) => {
    try {
      const hardcodedAllowedEmails = ['72210117@students.liu.edu.lb'];
      if (hardcodedAllowedEmails.includes(email)) {
        return true;
      }
      
      const { data, error } = await supabase
        .from('allowed_admins')
        .select('email')
        .eq('email', email)
        .single();
      
      if (error && error.code !== 'PGRST116') { 
        console.error('Error checking email whitelist:', error);
        return false;
      }
      
      return !!data;
    } catch (error) {
      console.error('Error checking email whitelist:', error);
      return false;
    }
  };

  const login = async (email) => {
    try {
      const isAllowed = await isEmailWhitelisted(email);
      
      if (!isAllowed) {
        return { 
          success: false, 
          message: "This email is not authorized for admin access." 
        };
      }
      
      const origin = `${window.location.origin}/ACS`;
      
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${origin}/auth/callback`,
        }
      });
      
      if (error) throw error;
      return { success: true, message: "Check your email for the login link" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const isAdmin = async () => {
    if (!user) return false;
    
    return await isEmailWhitelisted(user.email);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      logout, 
      isAdmin,
      isEmailWhitelisted
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
