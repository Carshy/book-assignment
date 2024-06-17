import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { fetchBookReducer } from './reducers/reducers';
import searchReducer from './reducers/searchBooksReducer';

const rootReducer = combineReducers({
  fetchBooks: fetchBookReducer,
  searches: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
