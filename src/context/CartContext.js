import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = function ({ children }) {
  const [items, setItems] = useState([]);

  function addToCart(product) {
    setItems(function (prev) {
      const existing = prev.find(function (p) {
        return p.id === product.id;
      });

      if (existing) {
        return prev.map(function (p) {
          if (p.id === product.id) {
            return {
              ...p,
              quantity: p.quantity + 1
            };
          }
          return p;
        });
      }

      return prev.concat({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    });
  }

  function removeFromCart(id) {
    setItems(function (prev) {
      return prev.filter(function (p) {
        return p.id !== id;
      });
    });
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) return;
    setItems(function (prev) {
      return prev.map(function (p) {
        if (p.id === id) {
          return { ...p, quantity: quantity };
        }
        return p;
      });
    });
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items: items,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        updateQuantity: updateQuantity,
        clearCart: clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
