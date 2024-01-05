import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  //const listCxt = useContext(ListContext);
  const cartCxt = useContext(CartContext);

  return (
    <React.Fragment>
      <div>
        <ul>
          {cartCxt.items.map((item) => (
            <li key={item.id}>
              Name: {item.name} Description: {item.description} Price:{" "}
              {item.price} Qnt: {item.quantity}
              <button onClick={() => cartCxt.updateCartQuantity(item.id, 1)}>-1</button>
              <button onClick={() => cartCxt.updateCartQuantity(item.id, 5)}>-5</button>
            </li>
          ))}
        </ul>
        <button type="click" onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
