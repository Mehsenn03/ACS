import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import {
  getFeaturedProducts,
  getNewArrivals,
  getBestSellers,
  categories,
} from "../data/products";
import "../styles/Home.css";

export function Home() {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1745847768408-b7b83796cae6?w=1200"
            alt="WiFi Technology"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Your Trusted Partner for
            <span className="hero-title-highlight"> Networking Solutions</span>
          </h1>
          <p className="hero-description">
            Discover top networking equipment from leading brands. From WiFi routers to enterprise switches, we have everything you need.
          </p>
          <div className="hero-buttons">
            <Link to="/Shop" className="hero-button hero-button-primary">
              Shop Now
              <svg className="hero-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/about" className="hero-button hero-button-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section – Shop by Brand */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Shop by Brand</h2>
            <p className="section-description">
              Explore our collection of premium networking brands
            </p>
          </div>
          <div className="categories-grid">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to="/shop"
                  state={{ brand: category.id }}   
                  className="category-card"
                >
                  <div className="category-icon">
                    <img
                      src={process.env.PUBLIC_URL + `/assets/brands/${category.logo}`}
                      alt={category.name}
                      className="brand-logo"
                    />
                  </div>
                  <h3 className="category-name">{category.name}</h3>
                  <span className="category-count">
                    {(category.subcategories || []).length} types
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-description">
              Hand-picked products for your networking needs
            </p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="home-split">
            <div className="home-split-section">
              <div className="section-header-small">
                <h3 className="section-title-small">New Arrivals</h3>
                <Link to="/category/tplink" className="section-link">
                  View All
                  <svg className="section-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="home-products-list">
                {newArrivals.slice(0, 4).map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="home-product-item"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="home-product-image"
                    />
                    <div className="home-product-info">
                      <h4 className="home-product-name">{product.name}</h4>
                      <p className="home-product-price">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="home-split-section">
              <div className="section-header-small">
                <h3 className="section-title-small">Best Sellers</h3>
                <Link to="/category/ubiquiti" className="section-link">
                  View All
                  <svg className="section-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="home-products-list">
                {bestSellers.slice(0, 4).map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="home-product-item"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="home-product-image"
                    />
                    <div className="home-product-info">
                      <h4 className="home-product-name">{product.name}</h4>
                      <p className="home-product-price">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="trust-title">Quality Guaranteed</h4>
              <p className="trust-description">
                All products from official distributors with full warranty
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="trust-title">Fast Delivery</h4>
              <p className="trust-description">
                Quick delivery across Lebanon
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="trust-title">Expert Support</h4>
              <p className="trust-description">
                Professional technical support when you need it
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="trust-title">Best Prices</h4>
              <p className="trust-description">
                Competitive pricing on all products
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}