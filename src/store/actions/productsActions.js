import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from "./actionTypes";
import axios from '../../axios-dishes';

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

export const addProduct = productIndex => ({type: ADD_PRODUCT, productIndex});
export const removeProduct = index => ({type: REMOVE_PRODUCT, index});

