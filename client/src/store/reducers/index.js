import { combineReducers } from 'redux';

import app from './app';
import admin from './admin';

export default combineReducers({
    app, admin
});