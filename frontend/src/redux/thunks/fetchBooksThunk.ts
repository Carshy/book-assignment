import { Dispatch } from '@reduxjs/toolkit';
import { fetchBooks, searchBooks } from '../../api/booksApi';
import { fetchBookRequest, searchBooksRequest, searchBooksSuccess, searchBooksFailure } from '../actions/actionCreate';
import client from '../../client/client';
import { SEARCH_BOOKS_QUERY } from '../../api/booksApi';

// Fetch Books Thunk
export const fetchBooksThunk = () => async (dispatch: Dispatch) => {
  try {
    const books = await fetchBooks();
    dispatch(fetchBookRequest(books));
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
};

// Search Books Thunk
export const searchBooksThunk = (query: string) => async (dispatch: Dispatch) => {
  dispatch(searchBooksRequest(query));
  try {
    const books = await searchBooks(client, query);
    dispatch(searchBooksSuccess(books));
  } catch (error) {
    dispatch(searchBooksFailure(error.message));
  }
};
