import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ProductListing from "./components/ProductListing";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const adjustCart = (action, itemId, newQuantity) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
      return;
    }

    const updatedCart = [...cart];

    switch (action) {
      case "adjust":
        const adjustedQuantity = Math.max(0, newQuantity);
        updatedCart[itemIndex].quantity = adjustedQuantity;
        break;

      case "remove":
        updatedCart.splice(itemIndex, 1);
        break;

      default:
        return;
    }

    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/products"
            element={<ProductListing addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<ShoppingCart cart={cart} adjustCart={adjustCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
