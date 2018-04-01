import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import creditsReducer from './credits';
import authReducer from './auth';

const rootReducer = combineReducers({
  credits: creditsReducer,
  auth: authReducer,
  routing: routerReducer,
});

export default rootReducer;
