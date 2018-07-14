import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import '../sdk/init';
import signReducer from './reducers/sign';

const _reducers = {
    sign: signReducer
}

const reducers = combineReducers(_reducers);

let middlewares = [thunk];

let finalCreateStore = applyMiddleware(...middlewares)(createStore);

finalCreateStore = applyMiddleware(...middlewares)(createStore);

const store = finalCreateStore(reducers);

export default store;