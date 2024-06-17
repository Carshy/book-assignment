import { Dispatch } from '@reduxjs/toolkit';
import { fetchBooks } from '../../api/booksApi';
import { fetchBookRequest } from '../actions/actionCreate';

// Fetch Books Thunk
export const fetchBooksThunk = () => async (dispatch: Dispatch) => {
  try {
    const books = await fetchBooks();
    dispatch(fetchBookRequest(books));
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
};

// // Search Books Thunk
// export const searchBooksThunk = () => async (dispatch: Dispatch) => {
//   try {
//     const books = await searchBooks();
//     dispatch(searchBookRequest(books));
//   } catch (error) {
//     console.error('Failed to fetch books:', error);
//   }
// };
