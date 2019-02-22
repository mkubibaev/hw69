import React from 'react';

const CartItems = props => {
    return (
        <div>
            {Object.keys(props.cartProducts).map(productName => (
                props.cartProducts[productName] > 0
                    ? <div key={productName}>{productName} x{props.cartProducts[productName]}</div>
                    : null
            ))}
        </div>
    );
};

export default CartItems;
