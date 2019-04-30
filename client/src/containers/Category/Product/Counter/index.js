import React from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../../components/Icon';

const Counter = (props) => {
    return (
        <div className="product-counter">
            <div className="plus" onClick={props.addToCart}>
                <Icon icon={faPlus} />
            </div>
            <div className="amount">{props.amount}</div>
            <div className="minus" onClick={props.removeFromCart}>
                <Icon icon={faMinus} />
            </div>
        </div>
    );
}

export default Counter;
