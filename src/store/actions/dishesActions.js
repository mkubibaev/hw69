import {GET_DISHES_FAILURE, GET_DISHES_REQUEST, GET_DISHES_SUCCESS} from "./actionTypes";
import axios from '../../axios-dishes';

export const getDishesRequest = () => ({type: GET_DISHES_REQUEST});
export const getDishesSuccess = dishes => ({type: GET_DISHES_SUCCESS, dishes});
export const getDishesFailure = error => ({type: GET_DISHES_FAILURE, error});

export const getDishesList = () => {
    return dispatch => {
        dispatch(getDishesRequest());
        axios.get('dishes.json').then(response => {
            dispatch(getDishesSuccess(response.data));
        }, error => {
            dispatch(getDishesFailure(error));
        });
    }
};

