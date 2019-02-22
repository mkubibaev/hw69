import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import CartItems from "../../components/CartItems/CartItems";
import {removeProduct} from "../../store/actions/productsActions";
import Modal from "../../components/UI/Modal/Modal";

class Cart extends Component {
    state = {
        showModal: false
    };

    showModal = () => {
        this.setState({showModal: true});
    };

    closeModal = () => {
        this.setState({showModal: false});
    };

    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.showModal}
                    close={this.closeModal}
                />

                <div className="cart">
                    <h3 className="border-bottom mb-3">Cart</h3>
                    <div className="cart-inner">
                        <CartItems
                            cartProducts={this.props.cartProducts}
                            onRemove={this.props.removeProduct}
                        />

                        {this.props.totalPrice > 150 && (
                            <div className="cart-bottom">
                                <p>Total price: {this.props.totalPrice}</p>
                                <button onClick={this.showModal} className="btn btn-primary">Place order</button>
                            </div>
                        )}
                    </div>
                </div>
            </Fragment>

        );
    }
}

const mapStateToProps = state => ({
    cartProducts: state.products.cartProducts,
    totalPrice: state.products.totalPrice
});

const mapDispatchToProps = dispatch => ({
    removeProduct: productName => dispatch(removeProduct(productName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
