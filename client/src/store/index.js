import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import logger from './middleWares/logger';

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

window.getState = store.getState;

export default store;