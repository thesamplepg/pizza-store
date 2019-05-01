import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';
import { removeProduct } from '../../store/actions/app';
import logo from '../../assets/logo.png';
import Cart from '../Cart';

class MainNavbar extends Component {

    state = {
        logo: false,
        offsetTop: null,
        isCartOpen: false
    }

    componentDidMount() {
        this.setState({offsetTop: document.querySelector('.main-page_navbar').offsetTop});
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);   
    }

    scrollHandler = () => {
        const {offsetTop} = this.state;

        if(window.scrollY > offsetTop && !this.state.logo) this.setState({logo: true});
        else if(window.scrollY < offsetTop && this.state.logo) this.setState({logo: false});
    }

    clickHandler = (item) => {

        window.scrollTo({
            top: document.querySelector(`.category-${item}`).offsetTop,
            behavior: 'smooth'
        });
    }

    toggleCart = () => this.setState({isCartOpen: !this.state.isCartOpen});
    
    render() {
        const items = ['pizzas', 'combos', 'snakes', 'drinks', 'desserts', 'souvenirs'];

        return (
            <React.Fragment>
                <header className="main-page_header">
                    <div className="wrapper">
                        <Link to="/">
                            <img src={logo} alt="logo"/>
                            OK PIZZA
                        </Link>
                        <div className="promotion">
                            Pizza delivery <br />
                            <span>60 minut or pizza for free</span>
                        </div>
                    </div>
                </header>
                <nav className="main-page_navbar" style={{boxShadow: this.state.logo ? '0 1px 5px 2px rgba(0, 0, 0, .4)' : 'none'}}>
                    <div className="wrapper">
                        <ul className={`main-page_navbar_items${this.state.logo ? ' show-logo' : ''}`}>
                            <Link to="/" className="logo">
                                <img src={logo} alt="logo"/>
                            </Link>
                            {items.map(item => 
                                <li 
                                    onClick={() => this.clickHandler(item)} 
                                    key={item}>
                                {item}
                                </li>
                            )}
                        </ul>
                        <Link 
                            to="/cart" 
                            className="cart" 
                            onClick={this.toggleCart}
                        >
                            Cart
                            {
                                this.props.cart.length > 0 ?
                                <span> | {this.props.cart.length}</span> :
                                null
                            }
                        </Link>
                    </div>
                    {
                        this.state.isCartOpen ? 
                        <Cart 
                            removeProduct={this.props.removeProduct} 
                            cart={this.props.cart}
                        /> : null
                    }
                </nav>
            </React.Fragment>
        );
    }
}

export default connect( state => ({
    cart: state.app.cart
}), {removeProduct} )(MainNavbar);
