import React, { Component } from 'react';

import './index.scss';
import MainNavbar from '../MainNavbar';
import ButtonLoader from '../../components/ButtonLoader';

class Order extends Component {
    state = {
        inputs: {
            address: {
                type: 'text',
                value: '',
                placeHolder: 'address'
            },
            phoneNumber: {
                type: 'number',
                value: '',
                placeHolder: 'phone number'
            }
        },
        error: null,
        loading: false,
        success: false
    }

    componentDidUpdate() {
        if(this.state.success) {
            setTimeout(() => {
                this.props.history.push('/');
            }, 2000);
        }
    }

    inputHandler = (key, e) => {
        const inputs = {...this.state.inputs};

        inputs[key].value = e.target.value;
        
        this.setState({inputs});
    }

    submitHandler = (e) => {
        e.preventDefault();

        this.setState({loading: true});

        const products = JSON.parse(window.localStorage.getItem('ok-pizza-cart'));

        if(!products || products.length === 0) {
            this.setState({error: 'Cart is empty', loading: false});
            return;
        }

        const data = {products};

        for(let key in this.state.inputs) {
            const input = this.state.inputs[key];

            if(input.value.length > 5) {
                data[key] = input.value;
            } else {
                this.setState({error: `${input.placeHolder} is too short`, loading: false});
                return;
            }
        }

        fetch('/api/orders/create', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    this.setState({success: true, loading: false, error: null});
                } else {
                    this.setState({error: data.error, loading: false});
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({error: 'Something went wrong', loading: false});
            })
    }

    render() {
        return (
            <React.Fragment>
                <MainNavbar navbar={false}/>
                <form className="order-form">
                    <h1>Where to deliver ?</h1>
                    {
                        Object.keys(this.state.inputs).map(item => {
                            const input = this.state.inputs[item];

                            return <input 
                                key={input.placeHolder}
                                onChange={(e) => this.inputHandler(item, e)}
                                type={input.type}
                                placeholder={input.placeHolder}
                                value={input.value}
                            />
                        })
                    }
                    <p className="error">{this.state.error}</p>
                    {this.state.success ? <p className="success-message">Thank you, we are gonna call you</p> : null}
                    <button type="submit" onClick={this.submitHandler}>
                        Submit
                        {this.state.loading ? <ButtonLoader /> : null}
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default Order;
