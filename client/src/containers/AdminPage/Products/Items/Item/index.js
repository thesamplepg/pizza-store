import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../../../components/Icon';
import ButtonLoader from '../../../../../components/ButtonLoader';

const Item = (props) => {
    const loading = props.deleting === props._id;

    return (
        <div className="admin-page_products_item">
            <div className="admin-page_products_item_image-wrapper">
                <img src={props.image.url} alt="product"/>
            </div>
            <div className="admin-page_products_item_information">
                <div className="title">{props.title}</div>
                <div className="description">{props.description}</div>
                <div className="price">{props.price} $</div>
            </div>
            <div className="admin-page_products_item_layer">
                <button 
                    className="delete-button" 
                    onClick={props.delete}
                    disabled={loading}
                >
                    {loading ? <ButtonLoader /> : null}
                    <Icon icon={faTrash}/>
                </button>
            </div>
        </div>
    );
}

export default Item;
