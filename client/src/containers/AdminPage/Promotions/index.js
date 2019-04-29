import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPromotion, deletePromotion } from '../../../store/actions/app';

import './index.scss';
import AddPromotions from './AddPromotion';
import Items from './Items';

class Promotions extends Component {
    state = {
        deleting: null
    }
    
    deletePromotionHandler = (id) => {
        this.setState({deleting: id});

        fetch(`/api/promotions/delete?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    this.props.deletePromotion(id);
                    this.setState({deleting: null});
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({deleting: null});
            });
    }

    render() {
        return (
            <div className="admin-page_promotions">
                <AddPromotions 
                    addPromotion={this.props.addPromotion}
                />
                <Items 
                    deleting={this.state.deleting}
                    promotions={this.props.promotions}
                    deletePromotion={this.deletePromotionHandler}
                />
            </div>
        );
    }
}

const dispatchs = {
    addPromotion,
    deletePromotion
}

export default connect( state => ({
    promotions: state.app.promotions
}), dispatchs )(Promotions);
