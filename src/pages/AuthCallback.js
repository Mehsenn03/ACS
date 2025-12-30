import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

export function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (!error && data.session) {
        const { data: adminData, error: adminError } = await supabase
          .from('allowed_admins')
          .select('email')
          .eq('email', data.session.user.email)
          .single();
        
        const hardcodedAllowedEmails = ['72210117@students.liu.edu.lb'];
        const isHardcoded = hardcodedAllowedEmails.includes(data.session.user.email);
        
        if (isHardcoded || (!adminError && adminData)) {
          navigate("/admin");
        } else {
          await supabase.auth.signOut();
          navigate("/login?error=unauthorized");
        }
      } else {
        navigate("/login?error=authentication_failed");
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="spinner" style={{ 
          border: '4px solid rgba(0, 0, 0, 0.1)', 
          width: '36px', 
          height: '36px', 
          borderRadius: '50%', 
          borderLeftColor: '#09f', 
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }}></div>
        <p style={{ color: '#6c757d' }}>Completing authentication...</p>
      </div>
    </div>
  );
}
