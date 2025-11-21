import { Link } from "react-router-dom";
import "../styles/ProductCard.css";


export const ProductCard = function ({ product }) {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  const isInStock = product.availability === "In Stock" && product.stock > 0;

  return (
    <Link to={"/product/" + product.id} className="product-card text-decoration-none">
      <div className="product-card-image-wrapper position-relative">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image img-fluid rounded"
        />
        <div className="product-card-badges position-absolute top-0 start-0 m-2">
          {product.newArrival && (
            <span className="product-badge badge bg-primary me-1">NEW</span>
          )}
          {product.bestSeller && (
            <span className="product-badge badge bg-success me-1">BEST</span>
          )}
          {!isInStock && (
            <span className="product-badge badge bg-danger">OUT</span>
          )}
        </div>
      </div>

      <div className="product-card-content p-2">
        <h3 className="product-card-title h6 mb-2 text-dark">{product.name}</h3>
        <div className="product-card-price-section d-flex justify-content-between align-items-center">
          <span className="product-card-price fw-bold text-primary">{formatPrice(product.price)}</span>
          <span
            className={
              "product-card-stock small " +
              (isInStock ? "text-success" : "text-danger")
            }
          >
            {product.availability}
          </span>
        </div>
      </div>
    </Link>
  );
};
