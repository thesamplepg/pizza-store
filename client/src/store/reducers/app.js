import * as actionTypes from '../actions/index';

const initialState = {
    loading: false,
    promotions: null,
    cart: []
};

export default (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case actionTypes.HIDE_LOADER:
            return {
                ...state,
                loading: false
            }
        case actionTypes.GET_PROMOTIONS:
            return {
                ...state,
                promotions: action.payload.data
            }
        case actionTypes.ADD_PROMOTION:
            return {
                ...state,
                promotions: [
                    ...state.promotions,
                    action.payload.promotion
                ]
            }
        case actionTypes.DELETE_PROMOTION: {

            const promotions = state.promotions.filter(item => item._id !== action.payload.id);
            
            return {
                ...state,
                promotions
            }
        }
        case actionTypes.ADD_TO_CART: {
            const cart = [...state.cart];

            let exist = false;

            for(let item in cart) {
                if(cart[item]._id === action.payload.id) {
                    exist = true;
                }
            }

            if(!exist) {
                cart.push({...action.payload.product, amount: 1});
            } else {
                cart.forEach(item => {
                    if(item._id === action.payload.id) {
                        item.amount += 1;
                    }
                });
            }
            
            return {
                ...state, cart
            }
        }

        case actionTypes.REMOVE_FROM_CART: {
            const cart = [...state.cart];

            cart.forEach((item, index) => {
                if(item._id === action.payload.id) {
                    item.amount -= 1;
                
                    if(item.amount < 1) {
                        cart.splice(index, 1);
                    }
                }
            });

            return {
                ...state, cart
            }
        }

        default: return state;
    }

}
