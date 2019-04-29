import * as actionTypes from './index';
import { getDataTemplate } from './utlilits'

export const getMenu = () => dispatch => {
    return getDataTemplate('products', actionTypes.GET_MENU, dispatch);
}

export const setActive = (active) => {
    return {
        type: actionTypes.SET_ACTIVE,
        payload: { active }
    }
}

export const deleteProduct = (category, id) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: {
            category, id
        }
    }
}

export const addProduct = (category, product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: {category, product}
    }
}