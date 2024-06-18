import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_BOOKS_REQUEST } from '../actionTypes/actionTypes';
import { FetchBooksRequestAction, Book } from '@redux/types/types';

// Action creator for Fetching Books
export const fetchBookRequest = (books: Book[]): FetchBooksRequestAction => ({
  type: FETCH_BOOKS_REQUEST,
  payload: books,
});

// ****************Action creator for Searching Books*************

const GRAPHQL_API_URL = 'http://localhost:4000/';

const searchBooksQuery = `
  query SearchBooks($query: String!) {
    searchBooks(query: $query) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

interface SearchBooksResponse {
  data: {
    searchBooks: Book[];
  };
  errors?: { message: string }[];
}

export const searchBooks = createAsyncThunk(
  'books/searchBooks',
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.post<SearchBooksResponse>(
        GRAPHQL_API_URL,
        {
          query: searchBooksQuery,
          variables: { query },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.errors) {
        throw new Error(response.data.errors.map((error) => error.message).join(', '));
      }

      return response.data.data.searchBooks;
    } catch (error) {
      console.error('GraphQL request failed:', error);
      return rejectWithValue(error.message);
    }
  }
);
