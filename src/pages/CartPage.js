import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = items.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  const whatsappNumber = "96181234175";

  const handleQuantityChange = (id, event) => {
    const value = Number(event.target.value);
    if (!isNaN(value) && value >= 1) {
      updateQuantity(id, value);
    }
  };

  const handleWhatsAppCheckout = () => {
    if (!items.length) {
      alert("Your cart is empty.");
      return;
    }

    const lines = items.map(function (item) {
      const lineTotal = (item.price * item.quantity).toFixed(2);
      return "- " + item.name + " x" + item.quantity + " = $" + lineTotal;
    });

    const message =
      "Hello, I would like to order:\n\n" +
      lines.join("\n") +
      "\n\nTotal: $" +
      total.toFixed(2);

    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  };

  const tableHeaderTitles = [
    "Product",
    "Price",
    "Quantity",
    "Subtotal",
    "Actions"
  ];

  const header = (
    <div className="mb-4 text-center">
      <h1 className="display-5 fw-bold">Your Cart</h1>
      <p className="text-muted">
        Review your products and complete your order on WhatsApp.
      </p>
    </div>
  );

  if (!items.length) {
    return (
      <div className="container py-4">
        {header}
        <div className="card shadow-sm p-4 text-center">
          <p className="mb-3">Your cart is currently empty.</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={function () {
              navigate("/shop");
            }}
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4 cart-page">
      {header}

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">Cart Items</h2>

              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      {tableHeaderTitles.map(function (title, index) {
                        return <th key={index}>{title}</th>;
                      })}
                    </tr>
                  </thead>

                  <tbody>
                    {items.map(function (item) {
                      const subtotal = (item.price * item.quantity).toFixed(2);
                      return (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="product-thumb"
                              />
                              <span className="product-name">{item.name}</span>
                            </div>
                          </td>
                          <td>${item.price.toFixed(2)}</td>
                          <td style={{ maxWidth: "110px" }}>
                            <input
                              type="number"
                              min={1}
                              className="form-control form-control-sm"
                              value={item.quantity}
                              onChange={function (e) {
                                handleQuantityChange(item.id, e);
                              }}
                            />
                          </td>
                          <td>${subtotal}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={function () {
                                removeFromCart(item.id);
                              }}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5 mb-3">Order Summary</h2>

              <div className="d-flex justify-content-between mb-3">
                <span className="fw-semibold">Total</span>
                <span className="fw-bold fs-5">${total.toFixed(2)}</span>
              </div>

              <button
                type="button"
                className="btn btn-success w-100 mb-2"
                onClick={handleWhatsAppCheckout}
              >
                Buy via WhatsApp
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary w-100 mb-2"
                onClick={function () {
                  navigate("/shop");
                }}
              >
                Continue Shopping
              </button>

              <button
                type="button"
                className="btn btn-outline-danger w-100"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
