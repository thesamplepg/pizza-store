import React, { Component } from 'react';

import './index.scss';
import Item from './Item';
import AddForm from './AddForm';

class Items extends Component {
    state = {
        deleting: null,
        isOpen: false
    }

    deleteHandler = (active, id) => {
        this.setState({deleting: id});
        
        fetch(`/api/products/delete?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    this.props.deleteProduct(active, id);
                }

                this.setState({deleting: null});
            })
            .catch(err => {
                console.log(err)
                this.setState({deleting: null});
            });
    }
    
    renderItems = () => {
        const {items, active} = this.props

        return items.map(item => <Item 
                {...item} 
                key={item._id}
                deleting={this.state.deleting}
                delete={() => this.deleteHandler(active, item._id)}
            />
        );
    }

    toggleForm = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    closeForm = () => this.setState({isOpen: false});

    render () {
    
        const {items, active} = this.props

        return (
            <div className="admin-page_products_items">
                <h1>{active}</h1>
                <button 
                    onClick={this.toggleForm}
                    className={`admin-page_products_items_add-button${this.state.isOpen ? ' active' : ''}`}
                >
                    Add
                </button>
                {
                    this.state.isOpen ? 
                    <AddForm 
                        close={this.closeForm}
                        type={active}
                        addProduct={this.props.addProduct}
                    /> : 
                    null
                }
                {
                    items.length > 0 ?
                    this.renderItems() :
                    <h2>There are no {active} yet</h2>
                }
            </div>
        );
    }
}

export default Items;
