import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import '../sdk/init';
import signReducer from './reducers/sign';
import session from './reducers/session';

const _reducers = {
    sign: signReducer,
    session: session,
}

const reducers = combineReducers(_reducers);

let middlewares = [thunk];

let finalCreateStore = applyMiddleware(...middlewares)(createStore);

finalCreateStore = applyMiddleware(...middlewares)(createStore);

const store = finalCreateStore(reducers);

export default store;