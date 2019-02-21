import {GET_DISHES_FAILURE, GET_DISHES_REQUEST, GET_DISHES_SUCCESS} from "../actions/actionTypes";

const convertToArr = obj => {
    return Object.keys(obj).map(key => {
        return {
            ...obj[key],
            id: key
        }
    });
};

const initialState = {
    dishes: [],
    error: null,
    loading: true
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DISHES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_DISHES_SUCCESS:
            return {
                ...state,
                dishes: convertToArr(action.dishes),
                loading: false
            };
        case GET_DISHES_FAILURE:
            return {
                ...state,
                loading: false
            };
        default:
            return state
    }
};

export default dishesReducer;
