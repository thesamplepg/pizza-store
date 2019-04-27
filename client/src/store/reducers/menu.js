import * as actionTypes from '../actions/index';

const initialState = {
    pizzas: null,
    snakes: null,
    desserts: null,
    drinks: null,
    combo: null,
    souvenirs: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MENU:
            const newMenu = {...state};

            for(let item in newMenu) {
                if(action.payload.menu[item]) {
                    newMenu[item] = action.payload.menu[item];
                }
            }
        
            return newMenu;

        default: return state;
    }
}
