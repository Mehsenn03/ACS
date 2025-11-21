import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/products";
import "../styles/Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <div className="footer-logo-section">
            <img
              src="https://customer-assets.emergentagent.com/job_baf16e3c-7139-4484-8973-6a569208b090/artifacts/mfx9kb58_Acs%20logo.jpg"
              alt="ACS Logo"
              className="footer-logo"
            />
            <h3 className="footer-title">ALL CONNECTIONS</h3>
          </div>

          <p className="footer-description">
            Your trusted partner for networking solutions in Lebanon since 2013.
            We provide top-quality networking equipment from leading brands.
          </p>

          <div className="footer-social">

            <a
              href="https://www.facebook.com/Allconnections.lb"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 
                5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43
                c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83
                c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
                23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/allconnections__sarl/#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 
                3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 
                1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 
                3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 
                0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 
                0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 
                4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 
                3.675c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 
                6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z" />
              </svg>
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B96181234175"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <svg className="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 
                1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 
                0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 
                5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 
                1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </a>

          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/admin" className="footer-link">Admin Dashboard</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Categories</h4>
          <ul className="footer-list">
            {categories.slice(0, 6).map(cat => (
              <li key={cat.id}>
                <Link to={`/Shop`} className="footer-link">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Top Brands</h4>
          <ul className="footer-list">
            {["Ubiquiti", "MikroTik", "TP-Link", "Mimosa", "Cisco", "Netis"].map((b, i) => (
              <li key={i} className="footer-brand">{b}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {currentYear} All Connections SARL. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};
