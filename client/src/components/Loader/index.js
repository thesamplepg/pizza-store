import React from 'react';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../Icon';

const Loader = ({loading}) => {
    return (
        <div className={`full-screen_loader${!loading ? ' full-screen_loader-hide' : ''}`}>
            <div className="full-screen_loader_wrapper">
                <div className="top-slices">
                    <Icon icon={ faPizzaSlice }/>
                    <Icon icon={ faPizzaSlice }/>
                    <Icon icon={ faPizzaSlice }/>
                </div> 
                <div className="bottom-slices">
                    <Icon icon={ faPizzaSlice }/>
                    <Icon icon={ faPizzaSlice }/>
                </div>
            </div>
        </div>
    );
}

export default Loader;
