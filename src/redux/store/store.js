import { createStore, combineReducers } from 'redux';
import todoReducer from '../reducers/todoReducer';

// combineReducers() is used to combine all the reducers as rootReducer and save it in the store
const rootReducer = combineReducers(
  { todos: todoReducer, }
);

const store = createStore(rootReducer);

export default store;
