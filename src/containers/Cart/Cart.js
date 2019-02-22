import React, {Component} from 'react';
import {connect} from "react-redux";
import CartItems from "../../components/CartItems/CartItems";

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <h3 className="border-bottom mb-3">Cart</h3>
                <CartItems
                    cartProducts={this.props.cartProducts}
                />
                <p>Total price: {this.props.totalPrice}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartProducts: state.products.cartProducts,
    totalPrice: state.products.totalPrice
});

export default connect(mapStateToProps)(Cart);
