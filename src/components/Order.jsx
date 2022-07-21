import React from 'react';
import "../styles/Orders.scss"

const Order = () => {
    return (
        <div className="Order">
        <p>
            <span>06.25.22</span>
            <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src="./icons/flechita.svg" alt="arow"/>
    </div>
    );
}