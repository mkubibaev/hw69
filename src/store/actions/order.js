import axios from '../../axios-products';
import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "./actionTypes";
import {resetCart} from "./productsActions";

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, error});

export const createOrder = orderData => {
    return dispatch => {
        dispatch(orderRequest());

        return axios.post('product-orders.json', orderData).then(
            response => {
                dispatch(orderSuccess());
                dispatch(resetCart());
            },
            error => dispatch(orderFailure(error))
        );
    }
};



