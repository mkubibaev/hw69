import React, {Component} from 'react';
import {connect} from "react-redux";
import CartItems from "../../components/CartItems/CartItems";

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <h3 className="border-bottom mb-3">Cart</h3>
                <CartItems
                    dishes={this.props.products}
                    cartItemsId={this.props.cart}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.products.cart,
});

export default connect(mapStateToProps)(Cart);
