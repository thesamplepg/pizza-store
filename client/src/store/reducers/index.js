import { combineReducers } from 'redux';

import app from './app';
import admin from './admin';
import menu from './menu';

export default combineReducers({
    app, admin, menu
});