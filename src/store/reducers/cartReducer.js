
const initialState = {

};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_PRODUCT:
        //     console.log(state);
        //     console.log(action.index);
        //     return {
        //         ...state,
        //         // cart: state.cart[action.index]
        //     };
        default:
            return state;
    }
};

export default cartReducer;
