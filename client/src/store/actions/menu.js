import * as actionTypes from './index';

export const getMenu = () => dispatch => new Promise((resolve, reject) => {
    
    dispatch({type: actionTypes.GET_MENU + '_REQUEST'});

    fetch('/api/products')
        .then(res => res.json())
        .then(data => {

            if(data.success) {
                dispatch({
                    type: actionTypes.GET_MENU,
                    payload: { menu: data.menu }
                });

                resolve();
            } else {
                dispatch({
                    type: actionTypes.GET_MENU + '_FALSE'
                });
                
                reject();
            }

        })
        .catch(err => console.log(err));

});