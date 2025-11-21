import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/NavBar.css";


export const Navbar = function () {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const cart = useCart();
  const totalItems = cart.items.reduce((sum, i) => sum + i.quantity, 0);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleSearch(event) {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    navigate("/search?q=" + encodeURIComponent(searchQuery));
    setSearchQuery("");
  }

  function goToCart() {
    navigate("/cart");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={process.env.PUBLIC_URL+"/assets/brands/logo.png"}
            alt="Logo"
            className="navbar-logo-img-large"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          style={{ backgroundColor: "#de6610ff", border: "none", color: "#fff" }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={"collapse navbar-collapse" + (isOpen ? " show" : "") }>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item ms-lg-4">
              <Link to="/admin" className="nav-link fw-bold text-danger">Admin</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <form className="d-flex me-3" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button
                className="btn text-white fw-bold"
                type="submit"
                style={{ backgroundColor: "#de6610ff", border: "none" }}
              >
                <i className="bi bi-search" />
              </button>
            </form>

            <button
              type="button"
              onClick={goToCart}
              className="btn btn-outline-dark position-relative"
            >
              <i className="bi bi-cart3 fs-5" />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
