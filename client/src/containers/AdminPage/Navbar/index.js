import React from 'react';
import { Link } from 'react-router-dom';
import { faPizzaSlice, faShare, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../components/Icon';

const Navbar = () => {
    const items = [
        {
            title: 'products',
            path: '',
            icon: faPizzaSlice
        },
        {
            title: 'promotions',
            path: '/promotions',
            icon: faShare
        },
        {
            title: 'orders',
            path: '/orders',
            icon: faNewspaper
        }
    ]
    
    return (
        <nav className="admin-page_navbar">
            <Link className="admin-page_navbar_brand" to="/admin">Admin Panel</Link>
            <ul className="admin-page_navbar_items">
                {
                    items.map(item => {
                        return (
                            <li key={item.title}>
                                <Link to={`/admin${item.path}`}>
                                    <Icon icon={ item.icon }/>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Navbar;
