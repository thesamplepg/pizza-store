export const getDataTemplate = (url, type, dispatch) => new Promise((resolve, reject) => {

    dispatch({type: type + '_REQUEST'});

    fetch(`/api/${url}`)
        .then(res => res.json())
        .then(data => {

            if(data.success) {

                dispatch({
                    type: type,
                    payload: { data: data[url] }
                });

                resolve(data[url]);

            } else {

                dispatch({
                    type: type + '_FALSE'
                });

                reject();

            }

        })
        .catch(err => {
            console.log(err);

            dispatch({type: type + '_FALSE'});
        });

});