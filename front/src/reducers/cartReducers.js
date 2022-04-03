const cartReducers = (state={ stateArrCartProducts:[] }, actions) => {

    switch (actions.type) {
        case 'ADD_CART':
            return {
                stateArrCartProducts: [
                    ...state.stateArrCartProducts,
                    actions.newProduct
                ]
            }
        default:
            return state;
    }
}

export default cartReducers;