import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './index.scss';
import Icon from '../../components/Icon';

const Cart = ({cart, removeProduct}) => {

    const getOrdersCash = () => {
        return cart.reduce((accumulator, next) => {
            return accumulator += next.price * next.amount;
        }, 0)
    }

    let output = <div className="empty">Empty</div>

    if(cart.length > 0) {
        output = (
            <React.Fragment>
                <Link to="/cart" className="cart-section_order-button">
                    Order
                </Link>
                <ul className="cart-section_cart-items">
                    {
                        cart.map((item) => {
                            return (
                                <li className="cart-section_cart-items_cart-item">
                                    <img src={item.image.url} alt="presentation"/>
                                    <div className="information">
                                        <div className="title">{item.title}</div>
                                        <div className="price">{item.amount} x {item.price} $</div>
                                    </div>
                                    <div onClick={() => removeProduct(item._id)} className="cart-section_cart-items_cart-item_remove">
                                        <Icon icon={faPlus}/>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className="cart-section_total-cost">
                    Total <span>{getOrdersCash()} $</span>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className="cart-section">
            {output}
        </div>
    );
}

export default Cart;
