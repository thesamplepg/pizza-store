import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';
import Loader from './components/Loader';
import AdminPage from './containers/AdminPage';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Loader loading={this.props.loading}/>
                <main>
                    <Route path="/admin" component={AdminPage}/>
                </main>
            </React.Fragment>
        );
    }
}

export default connect( state => ({
    loading: state.app.loading
}) )(App);
