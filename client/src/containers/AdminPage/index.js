import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './index.scss';
import Navbar from './Navbar';
import { verify, getAdmins, getOrders } from '../../store/actions/admin';
import { showLoader, hideLoader } from '../../store/actions/app';
import Products from './Products';
import Promotions from './Promotions';
import Orders from './Orders';

class AdminPage extends Component {

    state = {
        loading: true
    }

    
    componentWillMount() {
        this.props.showLoader();
    }
    
    async componentDidMount() {
        try {
            await this.props.verify();
            await this.props.getOrders();

            this.setState({loading: false});
            this.props.hideLoader();


        } catch (error) {
            
            this.props.history.push('/admin/login');
            this.props.hideLoader();

        } 
            
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.loading !== nextState.loading;
    }

    render() {
        return (
            <div className="admin-page">
                <Navbar />
                {
                    !this.state.loading ?
                    <section className="admin-page_content">
                        <Switch>
                            <Route exact path="/admin" component={Products}/>
                            <Route path="/admin/promotions" component={Promotions}/>
                            <Route path="/admin/orders" component={Orders}/>
                        </Switch>
                    </section> : null
                }
            </div>
        );
    }
}

const dispatchs = {
    verify, 
    showLoader, 
    hideLoader, 
    getAdmins,
    getOrders
}

export default connect( state => ({
    login: state.admin.login,
    loading: state.app.loading
}), dispatchs )(AdminPage);
