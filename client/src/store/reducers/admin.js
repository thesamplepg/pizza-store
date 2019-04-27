import * as actionTypes from '../actions/index';

const initialState = {
    login: false
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
        
        default: return state;
    }

}
