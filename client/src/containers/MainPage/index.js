import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions/app';

import './index.scss';
import MainNavbar from '../MainNavbar';
import CarouselSection from './CarouselSection';
import Category from '../Category';

class MainPage extends Component {
    renderCategories = () => {
        return Object.keys(this.props.menu).map((item, index) => {
            if(this.props.menu[item].length > 0) {
                return <Category 
                    key={index} 
                    items={this.props.menu[item]}
                    title={item}
                    addToCart={this.props.addToCart}
                    removeFromCart={this.props.removeFromCart}
                    cart={this.props.cart}
                />
            } else return null;
        });
    }

    render() {
        return (
            <React.Fragment>
                <MainNavbar />
                <CarouselSection promotions={this.props.promotions}/>
                <div className="main-page_categories">
                    {this.renderCategories()}
                </div>
            </React.Fragment>
        );
    }
}

export default connect( state => ({
    menu: state.products.menu,
    promotions: state.app.promotions,
    cart: state.app.cart
}), {addToCart, removeFromCart} )(MainPage);
