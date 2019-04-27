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

export const getPromotions = () => (dispatch) => new Promise((resolve, reject) => {

    dispatch({type: actionTypes.GET_PROMOTIONS + '_REQUEST'});

    fetch('/api/promotions')
        .then(res => res.json())
        .then(data => {

            if(data.success) {

                dispatch({
                    type: actionTypes.GET_PROMOTIONS,
                    payload: { promotions: data.promotions }
                });

                resolve(data.menu);

            } else {

                dispatch({type: actionTypes.GET_PROMOTIONS + '_FALSE'});

                reject();
            }
 
        })
        .catch(err => console.log(err));

});