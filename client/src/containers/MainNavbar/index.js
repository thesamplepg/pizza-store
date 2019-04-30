import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import logo from '../../assets/logo.png';

class MainNavbar extends Component {

    state = {
        logo: false,
        offsetTop: null
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
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default MainNavbar;
