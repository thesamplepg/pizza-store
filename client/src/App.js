import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';
import Loader from './components/Loader';
import AdminPage from './containers/AdminPage';
import AdminLogin from './containers/AdminLogin';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="app-main">
                    <Switch>
                        <Route path="/admin" component={AdminPage}/>
                        <Route path="/admin/login" component={AdminLogin}/>
                    </Switch>
                </main>
                <Loader loading={this.props.loading}/>
            </React.Fragment>
        );
    }
}

export default connect( state => ({
    loading: state.app.loading
}) )(App);
