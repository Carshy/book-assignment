import { FETCH_BOOKS_REQUEST } from '../actionTypes/actionTypes';
import { FetchBooksRequestAction, Book } from '@redux/types/types';

// Action creator for Fetching Books
export const fetchBookRequest = (books: Book[]): FetchBooksRequestAction => ({
  type: FETCH_BOOKS_REQUEST,
  payload: books,
});
