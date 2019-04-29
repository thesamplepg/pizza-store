import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './index.scss';
import { verify, getAdmins } from '../../store/actions/admin';
import { showLoader, hideLoader } from '../../store/actions/app';
import Navbar from './Navbar';
import Products from './Products';

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
            await this.props.getAdmins();

            this.setState({loading: false});
            this.props.hideLoader();


        } catch (error) {
            
            this.props.history.push('/admin/login');
            this.props.hideLoader();

        } 
            
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.loading !== nextState.loading) {
            return true;
        } 

        return false;
    }

    render() {
        return (
            <div className="admin-page">
                <Navbar />
                <section className="admin-page_content">
                    <Switch>
                        <Route path="/admin" component={Products}/>
                    </Switch>
                </section>
            </div>
        );
    }
}

const dispatchs = {
    verify, 
    showLoader, 
    hideLoader, 
    getAdmins
}

export default connect( state => ({
    login: state.admin.login,
    loading: state.app.loading
}), dispatchs )(AdminPage);
