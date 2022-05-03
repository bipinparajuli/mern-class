import {createStore,combineReducers} from 'redux'

import todo from './reducer/todo';

const rootReducer = combineReducers({todo});

const store = createStore(rootReducer)

export default store