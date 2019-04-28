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