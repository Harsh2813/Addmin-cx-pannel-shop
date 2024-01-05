import React, { useContext } from "react";
import ListContext from "../../Store/list-context";
import CartContext from "../../Store/cart-context";

const MedicineList = () => {
  const listCxt = useContext(ListContext);
  const cartCxt = useContext(CartContext);

  const addItemtoCart = (item, qnt) => {
    //event.preventDefault();
    if (item.quantity >= qnt) {//check kiye ki jo item select kiye usme quantity jada ho button ki quantity 2 ya 5 se agar item me utni quantity available rhi to add krenge ni to alert denge
      listCxt.updateQuantity(item.id, qnt);
      cartCxt.addItem(item, qnt);
    } else {
      alert(`Sorry! Not enough stock for ${qnt} items.`);
    }
  };

  return (
    <React.Fragment>
      <div>
        <h2>Available Medicines</h2>
        <ul>
          {listCxt.data.map((item) => (
            <li key={item.id}>
              Name:{item.name} Description: {item.description} Price:{item.price} Available Quantity:{item.quantity}
              <button onClick={() => addItemtoCart(item, 1)}>Add to Cart</button>
              <button onClick={() => addItemtoCart(item, 2)}>Add 2 to Cart</button>
              <button onClick={() => addItemtoCart(item, 5)}>Add 5 to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MedicineList;
/* ListProvider me updated data array h to waha se useContext se array me map kiye aur list show kr diye button ke sath jisko click krne me addItemtoCart run hoga aur sath me updateQuantity bhi */