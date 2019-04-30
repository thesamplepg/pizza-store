import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import logo from '../../assets/logo.png';

class MainNavbar extends Component {

    state = {
        sticky: false,
        offsetTop: null
    }

    componentDidMount() {
        this.setState({offsetTop: document.querySelector('.main-navbar_nav').offsetTop});
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = () => {
        const { offsetTop } = this.state;

        if(window.scrollY > offsetTop && !this.state.sticky) this.setState({sticky: true});
        else if(window.scrollY < offsetTop && this.state.sticky) this.setState({sticky: false});
    }
    

    render() {
        const items = ['pizzas', 'combos', 'snakes', 'desserts', 'drinks'];

        return (
            <nav className="main-navbar_wrapper">
                <div className="main-navbar">
                    <header className="main-navbar_header">
                        <Link to="/" className="main-navbar_header_brand">
                            <img src={logo} alt="logo"/>
                            OK PIZZA
                        </Link>
                        <div className="main-navbar_header_promotion">
                            Pizza delivery <br />
                            <span>60 minutes or pizza for free</span>
                        </div>
                    </header>
                    <div className={`main-navbar_nav${this.state.sticky ? ' nav-sticky' : ''}`}>
                        <div className="main-navbar_nav_wrapper">
                            <img src={logo} alt="logo"/>
                            <ul className="main-navbar_nav_wrapper_items">
                                {items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNavbar;
