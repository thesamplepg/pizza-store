import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';
import { getMenu } from './store/actions/menu';
import { getPromotions, showLoader, hideLoader } from './store/actions/app';
import Loader from './components/Loader';
import AdminPage from './containers/AdminPage';
import AdminLogin from './containers/AdminLogin';
import MainPage from './containers/MainPage';
import Order from './containers/Order';

class App extends Component {

    state = {
        loading: true
    }

    
    componentWillMount() {
        this.props.showLoader();
    }

    async componentDidMount() {
        this.props.getPromotions()
        await this.props.getMenu();

        this.props.hideLoader();
        this.setState({loading: false});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.loading !== this.props.loading || nextState.loading !== this.state.loading;
    }
    
    render() {

        let output = null;

        if(!this.state.loading) {
            output = (
                <main className="app-main">
                    <Switch>
                        <Route path="/admin/login" component={AdminLogin}/>
                        <Route path="/admin" component={AdminPage}/>
                        <Route path="/order" component={Order}/>
                        <Route path="/" component={MainPage}/>
                    </Switch>
                </main>
            )
        }

        return (
            <React.Fragment>
                <Loader loading={this.props.loading}/>
                {output}
            </React.Fragment>
        );
    }
}

const dispatchs = { 
    getMenu, 
    getPromotions, 
    showLoader,
    hideLoader
}

export default connect( state => ({
    loading: state.app.loading,
}), dispatchs )(withRouter(App));
