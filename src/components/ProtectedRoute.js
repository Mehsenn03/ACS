import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, isAdmin } = useAuth();
  const [isAllowed, setIsAllowed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      if (!user) {
        setChecking(false);
        return;
      }

      const adminStatus = await isAdmin();
      setIsAllowed(adminStatus);
      setChecking(false);
    };

    checkAccess();
  }, [user, isAdmin]);

  if (checking) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner" style={{ 
          border: '4px solid rgba(0, 0, 0, 0.1)', 
          width: '36px', 
          height: '36px', 
          borderRadius: '50%', 
          borderLeftColor: '#09f', 
          animation: 'spin 1s linear infinite'
        }}></div>
      </div>
    );
  }

  if (!user || !isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
