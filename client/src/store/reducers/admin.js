import * as actionTypes from '../actions/index';

const initialState = {
    login: false,
    admins: null,
    orders: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.VERIFY:
            return {
                ...state,
                login: true
            }
        case actionTypes.VERIFY_FALSE:
            return {
                ...state,
                login: false
            }
        case actionTypes.GET_ADMINS:
            return {
                ...state,
                admins: action.payload.data
            }
        case actionTypes.GET_ORDERS:
            return {
                ...state,
                orders: action.payload.data
            }
        case actionTypes.DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(item => item._id !== action.payload.id)
            }
        case actionTypes.DELIVERED:
            
            return {
                ...state,
                orders: state.orders.map(order => {
                    if(order._id === action.payload.id) {
                        return {
                            ...order,
                            delivered: true
                        }
                    } else {
                        return order;
                    }
                })
            }

        default: return state;
    }

}
