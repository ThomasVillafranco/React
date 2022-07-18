import React from "react";
import OrderItem from "../components/OrderItem";
import "../styles/MyOrder.scss";

const MyOrder = () => {
  return (
    <div className="MyOrder">
      <div className="title-container">
        <h1 className="title">My order</h1>
        <div className="my-order-content">
          <div className="order">
            <p>
              <span>06.25.22</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <div className="shopping-card">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30.00</p>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
