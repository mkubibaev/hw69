import {
    ADD_PRODUCT,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    REMOVE_PRODUCT
} from "../actions/actionTypes";

const INITIAL_PRODUCTS = {
    'Pizza': 0,
    'Pilaf': 0,
    'Barbecue': 0,
    'Shakarap': 0,
};

const DELIVERY_PRICE = 150;

const initialState = {
    products: [],
    cart: {...INITIAL_PRODUCTS},
    totalPrice: DELIVERY_PRICE,
    error: null,
    loading: true
};

const convertToArr = obj => {
    return Object.keys(obj).map(key => ({
        ...obj[key],
        id: key
    }));
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: convertToArr(action.products),
                loading: false
            };
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false
            };
        case ADD_PRODUCT:
            const addingProduct = state.products[action.productIndex];

            return {
                ...state,
                cart: {
                    ...state.cart,
                    [addingProduct.title]: state.cart[addingProduct.title] + 1
                },
                totalPrice: state.totalPrice + addingProduct.price
            };
        case REMOVE_PRODUCT:
            const removingProduct = state.products[action.productIndex];

            return {
                ...state,
                cart: {
                    ...state.cart,
                    [removingProduct.title]: state.cart[removingProduct.title] - 1
                },
                totalPrice: state.totalPrice - removingProduct.price
            };
        default:
            return state
    }
};

export default productsReducer;
