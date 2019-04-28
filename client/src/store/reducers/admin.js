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

        default: return state;
    }

}
