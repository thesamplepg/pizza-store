import React, { Component } from 'react';

import './index.scss';
import ButtonLoader from '../../../../components/ButtonLoader';

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.form = React.createRef();

        this.state = {
            inputs: {
                title: {
                    type: 'text',
                    value: '',
                    placeHolder: 'title'
                },
                description: {
                    type: 'textarea',
                    value: '',
                    placeHolder: 'description'
                }
            },
            image: null,
            loading: false,
            error: null
        }
    }

    inputHandler = (e, key) => {
        const inputs = {...this.state.inputs};

        inputs[key].value = e.target.value;
        
        this.setState({inputs});
    }

    fileInputHandler = (e) => {
        const fileReader = new FileReader();

        fileReader.onload = (e) => {
            this.setState({image: e.target.result});
        }

        fileReader.readAsDataURL(e.target.files[0]);
    }

    renderInputs = () => {

        const keys = Object.keys(this.state.inputs);

        return keys.map(key => {
            const input = this.state.inputs[key];

            if(input.type === 'textarea') {
                return <textarea 
                    key={input.placeHolder}
                    value={input.value} 
                    placeholder={input.placeHolder}
                    onChange={(e) => this.inputHandler(e, key)}
                ></textarea>
            } else {
                return <input 
                    key={input.placeHolder}
                    type={input.type} 
                    value={input.value} 
                    placeholder={input.placeHolder}
                    onChange={(e) => this.inputHandler(e, key)}
                />
            }
        });

    }

    submitHandler = () => {
        this.setState({loading: true});

        const formData = new FormData(this.form.current);

        for(let key in this.state.inputs) {
            const input = this.state.inputs[key];

            if(input.value.length > 0) {
                formData.append(key, input.value);
            } else {
                this.setState({loading: false, error: `${key} is empty`});
                return;
            }
        }

        fetch('/api/promotions/create', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                this.props.addPromotion(data.promotion);
                this.setState({loading: false});
            } else {
                this.setState({loading: false, error: data.error});
            }

        })
        .catch(err => {
            console.log(err);
            this.setState({loading: false, error: 'Please choose image'});
        })
    }

    render() {
        return (
            <div className="admin-page_promotions_add-promotion">
                <h1>New Promotion</h1>
                <form ref={this.form}>
                    <input 
                        name="image"
                        id="file" 
                        type="file" 
                        accept="image/jpeg,image/png,image/jpg" 
                        onChange={this.fileInputHandler}
                    />
                </form>
                <label htmlFor="file">
                    Choose image
                </label>
                {this.state.image ? <img src={this.state.image} alt="product" /> : null}
                {this.renderInputs()}
                {this.state.error ? <div className="error">{this.state.error}</div> : null}
                <button disabled={this.state.loading} onClick={this.submitHandler}>
                    {this.state.loading ? <ButtonLoader /> : null}
                    Create promotion
                </button>
            </div>
        );
    }
}

export default AddForm;
