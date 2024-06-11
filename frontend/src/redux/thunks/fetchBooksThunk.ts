import { Dispatch } from '@reduxjs/toolkit';
import { fetchBooks } from '../../api/booksApi';
import { fetchBookRequest } from '../actions/actionCreate';

export const fetchBooksThunk = () => async (dispatch: Dispatch) => {
  try {
    const books = await fetchBooks();
    dispatch(fetchBookRequest(books));
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
};
