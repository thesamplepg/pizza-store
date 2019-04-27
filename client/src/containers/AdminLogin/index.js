import React, { Component } from 'react';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../components/Icon';
import ButtonLoader from '../../components/ButtonLoader';

class AdminLogin extends Component {

    state = {
        inputs: {
            name: {
                value: '',
                placeHolder: 'Name',
                type: 'text',
                icon: faUser
            },
            password: {
                value: '',
                placeHolder: 'Password',
                type: 'password',
                icon: faLock
            }
        },
        error: null,
        loading: false
    }

    renderInputs = () => {
        const inputs = Object.keys(this.state.inputs);

        return inputs.map((key, index) => {
            const input = this.state.inputs[key];
            
            return (
                <div className="admin-form_input-group" key={key + index}>
                    <div className="admin-form_input-group_icon">
                        <Icon icon={input.icon}/>
                    </div>
                    <input 
                        onChange={(e) => this.inputHandler(e, key)}
                        type={input.type}
                        placeholder={input.placeHolder}
                        value={input.value}
                    />
                </div>
            )
        });
    }

    inputHandler = (e, key) => {
        const inputs = {...this.state.inputs};

        inputs[key].value = e.target.value;

        this.setState({ inputs });
    }

    submitHandler = (e) => {

        e.preventDefault();

        this.setState({loading: true});

        const data = {};

        Object.keys(this.state.inputs).forEach((input, index) => {
            data[input] = this.state.inputs[input].value;
        });

        fetch('/api/admins/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if(data.success) {

                    this.props.history.push('/admin');

                } else {

                    this.setState({loading: false, error: data.error});

                }

            })
            .catch(error => console.log(error));

    }

    render() {
        return (
            <section className="admin-form-wrapper">
                <form className="admin-form">
                    <h2>Login</h2>
                    {this.renderInputs()}
                    {this.state.error ? <div className="admin-form_error">{this.state.error}</div> : null}
                    <button 
                        onClick={this.submitHandler} 
                        type="submit"
                        disabled={this.state.loading}
                    >Submit
                        {this.state.loading ? <ButtonLoader /> : null}
                    </button>
                </form>
            </section>
        );
    }
}

export default AdminLogin;
