import * as actionTypes from './index';
import { getDataTemplate } from './utlilits';

export const verify = () => dispatch => new Promise(async(resolve, reject) => {

    dispatch({type: actionTypes.VERIFY + '_REQUEST'});

    try {
        
        const res = await fetch('/api/admins/verify');
        const data = await res.json();

        if(data.success) {
            dispatch({type: actionTypes.VERIFY, payload: {data}});
            resolve();
        } else {
            dispatch({type: actionTypes.VERIFY_FALSE});
            reject();
        }


    } catch (error) {
        
        dispatch({type: actionTypes.VERIFY_FALSE});

    }
});

export const getAdmins = () => dispatch => {
    return getDataTemplate('admins', actionTypes.GET_ADMINS, dispatch);
}

export const getOrders = () => dispatch => {
    return getDataTemplate('orders', actionTypes.GET_ORDERS, dispatch);
}

export const deleteOrder = (id) => {
    return {
        type: actionTypes.DELETE_ORDER,
        payload: {id}
    }
}

export const switchToDelivered = (id) => ({
    type: actionTypes.DELIVERED,
    payload: { id }
});