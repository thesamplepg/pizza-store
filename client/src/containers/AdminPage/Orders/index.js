import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';
import { deleteOrder, switchToDelivered } from '../../../store/actions/admin';
import Order from './Order';

class Orders extends Component {
    
    renderOrders = () => {
        return this.props.orders.map((order) => {
            return <Order 
                {...order} 
                deleteOrder={this.props.deleteOrder} 
                switchToDelivered={this.props.switchToDelivered}
            />
        });
    }

    render() {
        return (
            <div className="admin-orders">
                {
                    this.props.orders.length > 0 ? 
                    this.renderOrders() : 
                    <div className="orders-error">No orders yet</div>
                }
            </div>
        );
    }
}

export default connect(state => ({
    orders: state.admin.orders
}), {deleteOrder, switchToDelivered})(Orders);
