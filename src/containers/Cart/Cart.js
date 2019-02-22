import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import CartItems from "../../components/CartItems/CartItems";
import {removeProduct} from "../../store/actions/productsActions";
import Modal from "../../components/UI/Modal/Modal";
import {createOrder} from "../../store/actions/order";

class Cart extends Component {
    state = {
        name: '',
        address: '',
        phone: '',
        showModal: false,
    };

    showModal = () => {
        this.setState({showModal: true});
    };

    closeModal = () => {
        this.setState({showModal: false});
    };

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    orderHandler = event => {
        event.preventDefault();

        const orderData = {
            products: this.props.cartProducts,
            price: this.props.totalPrice,
            customer: {...this.state, showModal: null}
        };

        this.props.createOrder(orderData).then(
            this.closeModal()
        )
    };

    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.showModal}
                    close={this.closeModal}
                    name={this.state.name}
                    address={this.state.address}
                    phone={this.state.phone}
                    changed={this.valueChanged}
                    submitted={this.orderHandler}
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
    removeProduct: productName => dispatch(removeProduct(productName)),
    createOrder: orderData => dispatch(createOrder(orderData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
