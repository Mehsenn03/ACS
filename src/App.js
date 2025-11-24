import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { Search } from "./pages/Search";
import { Admin } from "./pages/Admin";
import { CartPage } from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";


function App() {
  return (
    <BrowserRouter basename="/ACS">
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/search" element={<Search />} /> 
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="*"
                element={
                  <div className="container py-5 text-center">
                    <h1>Page Not Found</h1>
                    <p className="text-muted">Invalid page.</p>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
