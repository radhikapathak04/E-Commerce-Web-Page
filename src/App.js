import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
