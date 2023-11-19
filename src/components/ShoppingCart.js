import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({ cart, adjustCart }) => {
  const handleAdjustQuantity = (cartItem, adjustment) => {
    const currentQuantity =
      cartItem.quantity !== undefined ? cartItem.quantity : 1;
    const newQuantity = currentQuantity + adjustment;
    const adjustedQuantity = Math.max(0, newQuantity);
    adjustCart("adjust", cartItem.id, adjustedQuantity);
  };

  const handleRemoveItem = (itemId) => {
    adjustCart("remove", itemId);
  };

  return (
    <>
      <div>
        <h1
          style={{
            margin: "auto",
            textAlign: "center",
            paddingBottom: "20px",
          }}>
          Shopping Cart
        </h1>
      </div>
      <div className="shopping-cart">
        {cart.map((cartItem) => (
          <div className="cart-item" key={cartItem.id}>
            {console.log(`Image URL for ${cartItem.name}: ${cartItem.image}`)}
            <img src={cartItem.image} alt={cartItem.name} />
            <div className="item-details">
              <p>{cartItem.name}</p>
              <p>{`Price: $${cartItem.price}`}</p>
              <p>{`Quantity: ${
                cartItem.quantity !== undefined ? cartItem.quantity : 1
              }`}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => handleAdjustQuantity(cartItem, -1)}>
                Decrease
              </button>
              <button onClick={() => handleAdjustQuantity(cartItem, 1)}>
                Increase
              </button>
              <button onClick={() => handleRemoveItem(cartItem.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoppingCart;
