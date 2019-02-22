import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    REMOVE_PRODUCT, RESET_CART
} from "./actionTypes";
import axios from '../../axios-products';

export const getProductsRequest = () => ({type: GET_PRODUCTS_REQUEST});
export const getProductsSuccess = products => ({type: GET_PRODUCTS_SUCCESS, products});
export const getProductsFailure = error => ({type: GET_PRODUCTS_FAILURE, error});

export const getProductList = () => {
    return dispatch => {
        dispatch(getProductsRequest());
        axios.get('products.json').then(response => {
            dispatch(getProductsSuccess(response.data));
        }, error => {
            dispatch(getProductsFailure(error));
        });
    }
};

export const addProduct = productName => ({type: ADD_PRODUCT, productName});
export const removeProduct = productName => ({type: REMOVE_PRODUCT, productName});

export const resetCart = () => ({type: RESET_CART});



