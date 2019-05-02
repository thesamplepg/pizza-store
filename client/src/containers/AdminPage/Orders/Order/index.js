import React, { Component } from 'react';

import './index.scss';
import OrderProducts from '../OrderProducts';
import ButtonLoader from '../../../../components/ButtonLoader';

class Order extends Component {
    state = {
        isOpen: true,
        loading: false
    }

    deleteOrder = () => {
        const id = this.props._id;

        this.setState({loading: true});

        fetch(`/api/orders/delete?id=${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                this.props.deleteOrder(id);
                this.setState({loading: false});
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    switchDelivered = () => {
        fetch(`/api/orders/delivered?id=${this.props._id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                this.props.switchToDelivered(this.props._id);
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="admin_order">
                <div className="admin_order_phone">Phone: {this.props.phoneNumber}</div>
                <div className="admin_order_address">Address: {this.props.address}</div>
                <div 
                    onClick={!this.props.delivered ? this.switchDelivered : null}
                    className="admin_order_delivered"
                    style={{background: this.props.delivered ? 'green' : 'red'}}
                >
                    {this.props.delivered ? 'Delivered' : 'Not delivered'}
                </div>
                <button  
                    onClick={() => this.setState({isOpen: !this.state.isOpen})}
                    style={{opacity: this.state.isOpen ? '.5' : '1'}}
                >
                    {this.state.isOpen ? 'close' : 'open'} products
                </button>
                <button  disabled={this.state.loading} className="delete-button" onClick={this.deleteOrder}>
                    Delete
                    {this.state.loading ? <ButtonLoader /> : null}
                </button>
                {
                    this.state.isOpen ? 
                    <OrderProducts products={this.props.products}/> :
                    null
                }
            </div>
        );
    }
}

export default Order;
