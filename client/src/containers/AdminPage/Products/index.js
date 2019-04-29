import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    setActive, 
    deleteProduct, 
    addProduct
} from '../../../store/actions/menu';

import './index.scss';
import Categories from './Categories';
import Items from './Items';

class Products extends Component {
    onActive = (active) => this.props.setActive(active);

    render() {

        return (
            <div className="admin-page_products">
                <Categories 
                    menu={this.props.menu} 
                    clicked={this.onActive}
                    active={this.props.active}    
                />
                <Items 
                    addProduct={this.props.addProduct}
                    deleteProduct={this.props.deleteProduct}
                    items={this.props.menu[this.props.active]}
                    active={this.props.active}
                />
            </div>
        );
    }
}

const dispatchs = {
    setActive, 
    deleteProduct,
    addProduct
}

export default connect( state => ({
    menu: state.products.menu,
    active: state.products.active
}), dispatchs )(Products);
