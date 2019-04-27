import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';
import Navbar from './Navbar';
import { verify } from '../../store/actions/admin';
import { showLoader, hideLoader } from '../../store/actions/app';

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

        } catch (error) {
            
            this.props.history.push('/admin/login');

        } finally {

            this.setState({loading: false});
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
                ads
            </div>
        );
    }
}

const dispatchs = {
    verify, showLoader, hideLoader
}

export default connect( state => ({
    login: state.admin.login
}), dispatchs )(AdminPage);
