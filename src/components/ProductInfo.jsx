import React from "react";
import "../styles/ProductInfo.scss";

const ProductInfo = () => {
    return (

    <div>
        <div className="product-detail-close">
            <img src="./icons/icon_close.png" 
            alt="close"/>
        </div>
        
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
         alt="bike"/>
         <div className="ProductInfo">
            <p>$35,00</p>
            <p>Bike</p>
            <p>With its functional and practical size, this bike 
                is one of the best option in the market, adding personality
                and a retro-vintage aesthetic to your style.
            </p>
            <button className="primary-button
            add-to-cartbutton">
                <img src="./icons/bt_add_to_cart.svg"
                 alt=" add to cart"/>
                 Add to cart
            </button>

         </div>

    </div>
    );
}

export default ProductInfo;