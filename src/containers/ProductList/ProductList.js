import React, {Component} from 'react';
import {connect} from "react-redux";
import Product from "../../components/Product/Product";
import {getProductList, addProduct} from "../../store/actions/productsActions";
import Loader from "../../components/UI/Loader/Loader";

class ProductList extends Component {

    componentDidMount() {
        this.props.getProductList();
    }

    render() {
        if (this.props.loading) {
            return <Loader/>;
        }

        return (
            <div className="products-menu">
                <h3 className="border-bottom mb-3">Menu</h3>
                <div className="row">
                    {this.props.products.map((product, index) => (
                        <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                            <Product
                                title={product.title}
                                imgUrl={product.imgUrl}
                                price={product.price}
                                onAdd={() => this.props.addProduct(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    loading: state.products.loading
});

const mapDispatchToProps = dispatch => ({
    getProductList: () => dispatch(getProductList()),
    addProduct: productIndex => dispatch(addProduct(productIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
