import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import thunk from './middleWares/thunk';
import logger from './middleWares/logger';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

window.getState = store.getState;

export default store;