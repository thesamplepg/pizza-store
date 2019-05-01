import React, { Component } from 'react';
import MainNavbar from '../MainNavbar';

class Order extends Component {
    state = {
        inputs: {
            address: {
                type: 'text',
                value: '',
                placeHolder: 'address'
            },
            phone: {
                type: 'number',
                value: '',
                placeHolder: 'phone number'
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <MainNavbar navbar={false}/>
            </React.Fragment>
        );
    }
}

export default Order;
