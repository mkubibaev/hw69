
const initialState = {

};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_PRODUCT:
        //     console.log(state);
        //     console.log(action.index);
        //     return {
        //         ...state,
        //         // cartProducts: state.cartProducts[action.index]
        //     };
        default:
            return state;
    }
};

export default cartReducer;
