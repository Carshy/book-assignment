import { createSlice } from '@reduxjs/toolkit';
import { FETCH_BOOKS_REQUEST } from '../actionTypes/actionTypes';
import { searchBooks } from '../actions/actionCreate';
import { Book, BookActionTypes, BookState} from '@redux/types/types';

const initialState1: Book[] = [];

// Book fetching reducer
const fetchBookReducer = (state = initialState1, action: BookActionTypes): Book[] => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

// ******************Book Searching reducer******************
const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearBookList(state) {
      state.books = [];
    },
    updateBooksLoaded(state, action) {
      // Implement your logic to update the number of books loaded
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearBookList, updateBooksLoaded } = bookSlice.actions;

export default bookSlice.reducer;

export { fetchBookReducer };
