import React from 'react';

import './index.scss';
import Product from './Product';

const Category = ({items, addToCart, removeFromCart, title, cart}) => {
    return (
        <div className={`main-page_categories_category category-${title}`}>
            <h2>{title}</h2>
            <ul className="main-page_categories_category_items">                
                {items.map(item => {
                    let amount = 0;

                    for(let cartItem of cart) {
                        if(cartItem._id === item._id) amount = cartItem.amount;
                    }

                    return (
                        <Product 
                            {...item}
                            cartAmount={amount} 
                            key={item._id}
                            addToCart={() => addToCart(item._id, item)}
                            removeFromCart={() => removeFromCart(item._id)}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default Category;
