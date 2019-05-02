import React from 'react';

import './index.scss';

const OrderProducts = ({products}) => {
    return (
        <ul className="admin_orders_order-products">
            {
                products.map(product => {
                    return <li className="admin_orders_order-products_product">
                        <img src={product.image.url} alt="product"/>
                        <h3>{product.amount} x {product.title}</h3>
                    </li>
                })
            }
        </ul>
    );
}

export default OrderProducts;
