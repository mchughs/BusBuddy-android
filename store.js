import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index';

// const store = createStore(rootReducer, defaultState);
const store = applyMiddleware(thunk)(createStore)(rootReducer);

export default store;
