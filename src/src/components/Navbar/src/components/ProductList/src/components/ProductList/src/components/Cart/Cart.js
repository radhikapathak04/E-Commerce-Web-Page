import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> :
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.title} - ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      }
    </div>
  );
}

export default Cart;
