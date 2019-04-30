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

    
    render() {
        const items = ['pizzas', 'combos', 'snakes', 'desserts', 'drinks'];

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
                <nav className="main-page_navbar">
                    <div className="wrapper">
                        <ul className={`main-page_navbar_items${this.state.logo ? ' show-logo' : ''}`}>
                            <Link to="/" className="logo">
                                <img src={logo} alt="logo"/>
                            </Link>
                            {items.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default MainNavbar;
