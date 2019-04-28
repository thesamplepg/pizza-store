import * as actionTypes from './index';
import { getDataTemplate } from './utlilits'

export const getMenu = () => dispatch => {
    return getDataTemplate('products', actionTypes.GET_MENU, dispatch);
}