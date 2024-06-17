import axios from 'axios';
import { Book } from '@redux/types/types';

const GRAPHQL_API_URL = 'http://localhost:4000/';

// Query for fetching books
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
