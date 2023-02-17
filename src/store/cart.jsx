const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
// Action 
export const addToCart = (productId) => {
    return {
        type: ADD_TO_CART,
        productId 
    }
}

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        productId
    }
}

export const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch (action.type) {
        case ADD_TO_CART: 
            const product = {count: 1};
            product['id'] = action.productId;
            nextState[action.productId] = product; 
            return nextState;  
        case REMOVE_FROM_CART: 
            delete nextState[action.productId];
            return nextState 
        default:
            return nextState; 
    }
}



