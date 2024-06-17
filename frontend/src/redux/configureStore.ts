import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { fetchBookReducer } from './reducers/reducers';
import searchReducer from './reducers/searchBooksReducer';

const rootReducer = combineReducers({
  fetchBooks: fetchBookReducer,
  searches: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
