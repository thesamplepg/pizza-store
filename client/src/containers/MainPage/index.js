import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';
import MainNavbar from '../MainNavbar';
import Header from './Header';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <MainNavbar />
                <Header promotions={this.props.promotions}/>
            </React.Fragment>
        );
    }
}

export default connect( state => ({
    menu: state.products.menu,
    promotions: state.app.promotions
}) )(MainPage);
