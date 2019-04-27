import * as actionTypes from './index';

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

export const getAdmins = () => dispatch => new Promise((resolve, reject) => {
    
    dispatch({type: actionTypes.GET_ADMINS + '_REQUEST'});

    fetch('/api/admins')
        .then(res => res.json())
        .then(data => {

            if(data.success) {

                dispatch({
                    type: actionTypes.GET_ADMINS,
                    payload: { admins: data.admins }
                });

                resolve(data.admins);

            } else {

                dispatch({
                    type: actionTypes.GET_ADMINS + '_FALSE'
                });

                reject();

            }

        })
        .catch(err => {
            console.log(err);
        });

});