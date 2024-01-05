import React, { useContext, useState } from "react";
import CartContext from "./cart-context";
import ListContext from "./list-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const listCxt = useContext(ListContext);

  const addItemToCartHandler = (gotItem, qnt) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === gotItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === gotItem.id
            ? { ...item, quantity: item.quantity + qnt }
            : item
        );
      } else {
        return [...prevItems, { ...gotItem, quantity: qnt }];
      }
    });
  };

  const removeItemToCartHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id, qnt) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - qnt } : item
      );
      // Remove the item from the cart if the quantity becomes zero
      return updatedItems.filter((item) => item.quantity > 0);
    });
    listCxt.updateQuantity(id, -qnt);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    updateCartQuantity: updateCartQuantity,
  };

  return (
    <React.Fragment>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </React.Fragment>
  );
};

export default CartProvider;
