import React from 'react';

const CartItems = props => {
    return (
        <div className="cart-items">
            {Object.keys(props.cartProducts).map(productName => (
                props.cartProducts[productName] > 0
                    ? <div key={productName} className="cart-item">
                        <span>{productName} x{props.cartProducts[productName]}</span>
                        <button onClick={() => props.onRemove(productName)}>-</button>
                      </div>
                    : null
            ))}
        </div>
    );
};

export default CartItems;
