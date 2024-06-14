import { createSlice } from '@reduxjs/toolkit';
import { searchBooks } from '../actions/actionCreate';
import { BookState} from '@redux/types/types';

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