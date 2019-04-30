import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';
import MainNavbar from '../MainNavbar';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <MainNavbar />
            </React.Fragment>
        );
    }
}

export default connect( state => ({
    menu: state.products.menu
}) )(MainPage);
