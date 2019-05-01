import React from 'react';

import './index.scss';
import Counter from './Counter';

const Product = (props) => {
    return (
        <li className="main-page_product">
            <div className="main-page_product_image-wrapper">
                <img src={props.image.url} alt="product-presentation"/>
            </div>
            <div className="wrapper" style={{flexBasis: props.description !== 'null' ? '280px' : 'none'}}>
                <div className="main-page_product_title">{props.title}</div>
                {
                    props.description !== 'null' ?
                    <div className="main-page_product_description">
                        {props.description}
                    </div> : null
                }
                <footer className="main-page_product_footer">
                    <div className="main-page_product_footer_price">{props.price} $</div>
                    {
                        props.cartAmount < 1 ?
                        <div className="main-page_product_footer_button" onClick={props.addToCart}>Add to cart</div> :
                        <Counter 
                            addToCart={props.addToCart} 
                            removeFromCart={props.removeFromCart} 
                            amount={props.cartAmount}
                        />
                    }
                </footer>
            </div>
        </li>
    );
}

export default Product;
