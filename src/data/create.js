import {createStore, combineReducers, applyMiddleware} from 'redux';

import '../sdk/init';
import signReducer from './reducers/sign';

const _reducers = {
    sign: signReducer
}

const reducers = combineReducers(_reducers);

let middlewares = [];

let finalCreateStore = applyMiddleware(...middlewares)(createStore);

finalCreateStore = applyMiddleware(...middlewares)(createStore);

const store = finalCreateStore(reducers);

export default store;