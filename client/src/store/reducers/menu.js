import * as actionTypes from '../actions/index';

const initialState = {
    pizzas: null,
    snakes: null,
    desserts: null,
    drinks: null,
    combos: null,
    souvenirs: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MENU:
            const newMenu = {...state};

            for(let item in newMenu) {
                if(action.payload.data[item]) {
                    newMenu[item] = action.payload.data[item];
                }
            }
        
            return newMenu;

        default: return state;
    }
}
