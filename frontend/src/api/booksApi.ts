import axios from 'axios';
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

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await axios.post(GRAPHQL_API_URL, {
    query: FETCH_BOOKS_QUERY,
  });
  return response.data.data.books;
};
