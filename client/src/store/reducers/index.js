import { combineReducers } from 'redux';

import app from './app';
import admin from './admin';
import products from './products';

export default combineReducers({
    app, admin, products
});