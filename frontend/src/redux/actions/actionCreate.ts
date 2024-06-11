// import * as actionType from '../actionTypes/actionTypes';

// // Action create for Fetching Books

// export const fetchBookRequest = (fetch) => ({
//   type: actionType.FETCH_BOOKS_REQUEST,
//   payload: fetch,
// });

import { FETCH_BOOKS_REQUEST } from '../actionTypes/actionTypes';
import { FetchBooksRequestAction, Book } from '@redux/types/types';

// Action creator for Fetching Books
export const fetchBookRequest = (books: Book[]): FetchBooksRequestAction => ({
  type: FETCH_BOOKS_REQUEST,
  payload: books,
});
