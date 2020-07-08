import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index'; //Import the reducer

import check_login from './actions/index';

// Connect our store to the reducers
const sagaMiddleware = createSagaMiddleware()
export default createStore(rootReducer, applyMiddleware(sagaMiddleware))

const action = type => store.dispatch({type})   