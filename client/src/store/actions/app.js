import * as actionTypes from './index';

export const showLoader = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.SHOW_LOADER
    });

}

export const hideLoader = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.HIDE_LOADER
    });

}