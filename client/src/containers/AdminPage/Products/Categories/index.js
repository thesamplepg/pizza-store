import React from 'react';

import './index.scss';

const Categories = ({menu, clicked, active}) => {
    return (
        <ul className="admin-page_products_categories">
            {Object.keys(menu).map((item, index) => {
                return (
                    <li 
                        key={index + item} 
                        className={`admin-page_products_categories_item${active === item ? ' active' : ''}`}
                        onClick={() => clicked(item)}    
                    >
                        {item}
                    </li>
                )
            })}
        </ul>
    );
}

export default Categories;
