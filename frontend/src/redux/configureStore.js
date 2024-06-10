import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { fetchBookReducer } from './reducers/reducers';

const rootReducer = combineReducers({
    fetchBooks: fetchBookReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;