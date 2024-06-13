import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FETCH_BOOKS_REQUEST, SEARCH_BOOKS_REQUEST, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_FAILURE } from '../actionTypes/actionTypes';
import { FetchBooksRequestAction, Book } from '@redux/types/types';

// Action creator for Fetching Books
export const fetchBookRequest = (books: Book[]): FetchBooksRequestAction => ({
  type: FETCH_BOOKS_REQUEST,
  payload: books,
});

// **********Action creator for Searching Books*****************
export const searchBooksRequest = (query: string) => ({
  type: SEARCH_BOOKS_REQUEST,
  payload: query,
});

export const searchBooksSuccess = (books: Book[]) => ({
  type: SEARCH_BOOKS_SUCCESS,
  payload: books,
});

export const searchBooksFailure = (error: string) => ({
  type: SEARCH_BOOKS_FAILURE,
  payload: error,
});
