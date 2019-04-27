import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../Icon';

const ButtonLoader = () => {
    return (
        <div className="button-loader">
            <Icon icon={faSpinner}/>
        </div>
    );
}

export default ButtonLoader;
