import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { fetchBookReducer } from './reducers/reducers';
import bookReducer from '../redux/reducers/searchBooksReducer';

const rootReducer = combineReducers({
  fetchBooks: fetchBookReducer,
  searchBooks: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
