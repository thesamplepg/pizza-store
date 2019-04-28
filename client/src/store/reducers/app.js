import * as actionTypes from '../actions/index';

const initialState = {
    loading: false,
    promotions: null
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
        
        default: return state;
    }

}
