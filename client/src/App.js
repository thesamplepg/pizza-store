import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';
import { getMenu } from './store/actions/menu';
import { getPromotions, showLoader, hideLoader } from './store/actions/app';
import Loader from './components/Loader';
import AdminPage from './containers/AdminPage';
import AdminLogin from './containers/AdminLogin';

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
                        <Route exact path="/admin" component={AdminPage}/>
                        <Route path="/admin/login" component={AdminLogin}/>
                    </Switch>
                </main>
            )
        }

        return (
            <React.Fragment>
                {output}
                <Loader loading={this.props.loading}/>
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
