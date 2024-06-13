import axios from 'axios';
import { gql } from '@apollo/client';
import { Book } from '@redux/types/types';
import { images } from '../constants';

const GRAPHQL_API_URL = 'http://localhost:4000/';

const FETCH_BOOKS_QUERY = `
  query {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const SEARCH_BOOKS_QUERY = gql`
  query SearchBooks($query: String!) {
    searchBooks(query: $query) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.post(GRAPHQL_API_URL, {
      query: FETCH_BOOKS_QUERY,
    });
    if (response.data.errors) {
      throw new Error(response.data.errors.map((error: any) => error.message).join(', '));
    }
    return response.data.data.books;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const searchBooks = async (query: string): Promise<Book[]> => {
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
    console.error('Error searching books:', error);
    throw error;
  }
};
