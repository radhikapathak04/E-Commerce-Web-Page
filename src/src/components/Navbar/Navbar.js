import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>E-Commerce Store</h1>
      <div>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
