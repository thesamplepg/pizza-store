import * as actionTypes from './index';
import { getDataTemplate } from './utlilits';

export const showLoader = () => ({
    type: actionTypes.SHOW_LOADER
});

export const hideLoader = () => ({
    type: actionTypes.HIDE_LOADER
});

export const getPromotions = () => (dispatch) => {
    return getDataTemplate('promotions', actionTypes.GET_PROMOTIONS, dispatch);
}

export const deletePromotion = (id) => {
    return {
        type: actionTypes.DELETE_PROMOTION,
        payload: { id }
    }
}

export const addPromotion = (promotion) => {
    return {
        type: actionTypes.ADD_PROMOTION,
        payload: { promotion }
    }
}

export const addToCart = (id, product) => ({
    type: actionTypes.ADD_TO_CART,
    payload: { product, id }
});

export const removeFromCart = (id) => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id }
});

export const removeProduct = (id) => ({
    type: actionTypes.REMOVE_PRODUCT,
    payload: { id }
});