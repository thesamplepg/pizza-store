import * as actionTypes from '../actions/index';

const initialState = {
    menu: {
        pizzas: null,
        snakes: null,
        desserts: null,
        drinks: null,
        combos: null,
        souvenirs: null
    },
    active: 'pizzas'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MENU:
            const newMenu = {...state.menu};

            for(let item in newMenu) {
                if(action.payload.data[item]) {
                    newMenu[item] = action.payload.data[item];
                }
            }
        
            return {
                ...state,
                menu: newMenu
            };

        case actionTypes.SET_ACTIVE:
            return {
                ...state,
                active: action.payload.active
            }
        
        case actionTypes.DELETE_PRODUCT:
            const { category, id } = action.payload;
            const menu = {...state.menu}
            
            menu[category] = state.menu[category].filter((item) => item._id !== id);
        
            return {
                ...state, menu
            }
        case actionTypes.ADD_PRODUCT: {
            const { category, product } = action.payload;

            return {
                ...state,
                menu: {
                    ...state.menu,
                    [category]: [
                        ...state.menu[category],
                        product
                    ]
                }
            }
        }

        default: return state;
    }
}
