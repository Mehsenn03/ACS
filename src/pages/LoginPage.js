import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      if (error === 'unauthorized') {
        setMessageType("danger");
        setMessage("Your email is not authorized for admin access.");
      } else if (error === 'authentication_failed') {
        setMessageType("danger");
        setMessage("Authentication failed. Please try again.");
      }
    }
  }, [searchParams]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    
    const result = await auth.login(email);
    
    if (result.success) {
      setMessageType("success");
      setMessage(result.message);
    } else {
      setMessageType("danger");
      setMessage(result.message);
    }
    
    setLoading(false);
  }

  const getAlertStyle = () => {
    if (messageType === "success") {
      return {
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        marginBottom: '1rem'
      };
    } else if (messageType === "danger") {
      return {
        backgroundColor: '#f8d7da',
        color: '#721c24',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        marginBottom: '1rem'
      };
    }
    return {};
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div className="card" style={{ 
        padding: '1.5rem', 
        boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)', 
        maxWidth: '400px', 
        width: '100%' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <img 
            src="/assets/brands/logo.png" 
            alt="Logo" 
            style={{ maxWidth: '150px', marginBottom: '1rem' }}
          />
          <h2 style={{ marginBottom: '0.5rem' }}>Admin Login</h2>
          <p style={{ color: '#6c757d' }}>Enter your email to receive a magic link</p>
        </div>
        
        {message && (
          <div style={getAlertStyle()} role="alert">
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input
              type="email"
              style={{
                display: 'block',
                width: '100%',
                padding: '0.375rem 0.75rem',
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#495057',
                backgroundColor: '#fff',
                border: '1px solid #ced4da',
                borderRadius: '0.25rem'
              }}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            style={{
              display: 'block',
              width: '100%',
              padding: '0.375rem 0.75rem',
              fontSize: '1rem',
              lineHeight: '1.5',
              textAlign: 'center',
              color: '#fff',
              backgroundColor: loading ? '#6c757d' : '#007bff',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner" style={{
                  display: 'inline-block',
                  width: '1rem',
                  height: '1rem',
                  marginRight: '0.5rem',
                  border: '0.2em solid currentColor',
                  borderRightColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></span>
                Sending...
              </>
            ) : (
              "Send Magic Link"
            )}
          </button>
        </form>
        
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <small style={{ color: '#6c757d' }}>
            We'll send you a link to sign in to your account.
          </small>
        </div>
      </div>
    </div>
  );
}
