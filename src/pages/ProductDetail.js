import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { getProductById, getProductsByCategory } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import "../styles/ProductDetail.css";
import { useCart } from "../context/CartContext";

export const ProductDetail = function () {
  const cart = useCart();
  const params = useParams();
  const productId = params.productId;
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price);

  const isInStock = product.availability === "In Stock" && product.stock > 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      cart.addToCart(product);
    }
    toast.success(`Added ${quantity} × ${product.name} to cart!`);
  };

  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-white px-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="row g-4 align-items-start">
        <div className="col-md-6">
          <div className="position-relative border rounded p-3 bg-light">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded w-100 mb-2"
              style={{ maxHeight: 400, objectFit: "contain" }}
            />
            {product.newArrival && (
              <span className="badge bg-success position-absolute top-0 start-0 m-2">New Arrival</span>
            )}
            {product.bestSeller && (
              <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2">Best Seller</span>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <h1 className="h3 mb-3">{product.name}</h1>
          <div className="mb-2">
            <span className="text-muted small me-3">Product ID: {product.id}</span>
            <span className={
              "badge " + (isInStock ? "bg-success" : "bg-danger")
            }>
              {product.availability}
            </span>
          </div>
          <div className="mb-3">
            <span className="h4 text-primary">{formatPrice(product.price)}</span>
            {product.stock > 0 && product.stock < 10 && (
              <span className="ms-3 text-danger small">Only {product.stock} left in stock!</span>
            )}
          </div>
          <p className="mb-3">{product.description}</p>

          {product.specs && (
            <div className="mb-3">
              <h5>Specifications</h5>
              <dl className="row">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div className="col-6 mb-1" key={key}>
                    <dt className="fw-bold small mb-0">{key.charAt(0).toUpperCase() + key.slice(1)}:</dt>
                    <dd className="mb-0 small text-muted">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {isInStock ? (
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="input-group" style={{ maxWidth: 140 }}>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <span>&minus;</span>
                </button>
                <input
                  type="number"
                  className="form-control text-center"
                  id="quantity"
                  value={quantity}
                  min={1}
                  max={product.stock}
                  onChange={e => {
                    let val = parseInt(e.target.value, 10);
                    if (isNaN(val)) val = 1;
                    val = Math.max(1, Math.min(product.stock, val));
                    setQuantity(val);
                  }}
                  style={{ width: 50 }}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  aria-label="Increase quantity"
                >
                  <span>&#43;</span>
                </button>
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex align-items-center"
                onClick={handleAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="alert alert-warning mt-3">
              This product is currently out of stock. Please check back later or contact us for availability.
            </div>
          )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-5">
          <h2 className="h5 mb-4">Related Products</h2>
          <div className="row">
            {relatedProducts.map((relatedProduct) => (
              <div className="col-md-4 mb-3" key={relatedProduct.id}>
                <ProductCard product={relatedProduct} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
