import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from "../actions/actionTypes";

const INITIAL_PRODUCTS = {
    'Pizza': 0,
    'Pilaf': 0,
    'Barbecue': 0,
    'Shakarap': 0,
};

const PRODUCT_PRICES = {
    'Pizza': 500,
    'Pilaf': 240,
    'Barbecue': 200,
    'Shakarap': 100,
};

const DELIVERY_PRICE = 150;

const initialState = {
    products: [],
    cartProducts: {...INITIAL_PRODUCTS},
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
            return {
                ...state,
                cartProducts: {
                    ...state.cartProducts,
                    [action.productName]: state.cartProducts[action.productName] + 1
                },
                totalPrice: state.totalPrice + PRODUCT_PRICES[action.productName]
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                cartProducts: {
                    ...state.cartProducts,
                    [action.productName]: state.cartProducts[action.productName] - 1
                },
                totalPrice: state.totalPrice - PRODUCT_PRICES[action.productName]
            };
        default:
            return state
    }
};

export default productsReducer;
