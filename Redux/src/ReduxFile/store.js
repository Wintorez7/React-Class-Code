import { combineReducers, legacy_createStore } from 'redux';
import countReducer from './reducres/CountReducre';
import userReducer from './reducres/UserReducer';

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer
});

const store = legacy_createStore(rootReducer);

export default store;
