import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { fetchBookReducer, searchBookReducer } from './reducers/reducers';

const rootReducer = combineReducers({
  fetchBooks: fetchBookReducer,
  searchBooks: searchBookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
