import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer'
import todoListReducer from './todoListReducer'


export const rootReducer = combineReducers({
    cartReducer,
    todoListReducer,
})