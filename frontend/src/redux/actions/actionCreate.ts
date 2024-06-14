import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_BOOKS_REQUEST, SEARCH_BOOKS_REQUEST, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_FAILURE } from '../actionTypes/actionTypes';
import { FetchBooksRequestAction, Book } from '@redux/types/types';

// Action creator for Fetching Books
export const fetchBookRequest = (books: Book[]): FetchBooksRequestAction => ({
  type: FETCH_BOOKS_REQUEST,
  payload: books,
});

// ****************Action creator for Searching Books**************
const GRAPHQL_API_URL = 'http://localhost:4000/';

const SEARCH_BOOKS_QUERY = `
  query SearchBooks($query: String!) {
    searchBooks(query: $query) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const searchBooks = createAsyncThunk(
  'books/searchBooks',
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(GRAPHQL_API_URL, {
        query: SEARCH_BOOKS_QUERY,
        variables: { query },
      });
      if (response.data.errors) {
        throw new Error(response.data.errors.map((error: any) => error.message).join(', '));
      }
      return response.data.data.searchBooks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

