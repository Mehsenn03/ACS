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
      
      // Dynamic redirect URL for production vs development
      const getRedirectUrl = () => {
        // Use environment variable if set
        if (process.env.REACT_APP_REDIRECT_URL) {
          return process.env.REACT_APP_REDIRECT_URL;
        }
        
        // For production (Render deployment)
        if (window.location.hostname.includes('render.com') || 
            process.env.NODE_ENV === 'production') {
          return 'https://acs-frontend-ghnl.onrender.com/auth/callback';
        }
        
        // For local development
        return `${window.location.origin}/auth/callback`;
      };
      
      const redirectUrl = getRedirectUrl();
      console.log('Using redirect URL:', redirectUrl); // Debug log
      
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl,
        }
      });
      
      if (error) throw error;
      return { success: true, message: "Check your email for the login link" };
    } catch (error) {
      console.error('Login error:', error);
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
