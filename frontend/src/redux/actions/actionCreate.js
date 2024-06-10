import * as actionType from '../actionTypes/actionTypes';

// Action create for Fetching Books

export const fetchBookRequest = (fetch) => ({
  type: actionType.FETCH_BOOKS_REQUEST,
  payload: fetch,
});