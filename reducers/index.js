import { combineReducers } from 'redux';
import reviews from './reviews';
import companies from './companies';

const rootReducer = combineReducers({ reviews, companies });

export default rootReducer;
