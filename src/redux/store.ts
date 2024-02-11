import { combineReducers, createStore } from 'redux';
import TaskReducer from './Reducers/Task';


const rootReducer = combineReducers({
  Task: TaskReducer,
});



const store = createStore(rootReducer);

export default store;