import React from "react";
import "@styles/OrderItem.scss";
import icon from "@icons/icon_close.png";

const OrderItem = () => {
     return (
        <div className="OderItem">
        <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg" 
            alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30.00</p>
        <img src={icon}
         alt="close  "/>
        
    </div>
     );
}

export default OrderItem;