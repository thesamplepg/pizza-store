import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../../components/Icon';
import ButtonLoader from '../../../../components/ButtonLoader';

const items = ({deletePromotion, promotions, deleting}) => {
    return (
        <ul className="admin-page_promotions_items">
            {
                promotions.map(promotion => {
                    const loading = deleting === promotion._id;

                    return (
                        <div className="admin-page_promotions_items_item" key={promotion._id}>
                            <div className="layer">
                                <button disabled={loading} onClick={() => deletePromotion(promotion._id)}>
                                    <Icon icon={faTrash}/>
                                    {loading ? <ButtonLoader/> : null}
                                </button>
                            </div>
                            <h2>{promotion.title}</h2>
                            <img src={promotion.image.url} alt="promotion"/>
                            <div className="description">{promotion.description}</div>
                        </div>
                    );
                })
            }
        </ul>
    );
}

export default items;
