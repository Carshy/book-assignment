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

// ********************************************************************
// const GRAPHQL_API_URL = 'http://localhost:4000/';

// interface SearchBooksResponse {
//   searchBooks: Book[];
// }

// const searchBooksQuery = `
//   query SearchBooks($query: String!) {
//     searchBooks(query: $query) {
//       title
//       author
//       coverPhotoURL
//       readingLevel
//     }
//   }
// `;

// export const searchBooks = async (): Promise<Book[]> => {
//   try {
//     const response = await axios.post(GRAPHQL_API_URL, {
//       query: searchBooksQuery,
//     });
//     if (response.data.errors) {
//       throw new Error(response.data.errors.map((error: any) => error.message).join(', '));
//     }
//     return response.data.data.searchBooks;
//   } catch (error) {
//     console.error('Error searching books:', error);
//     throw error;
//   }
// };

// export const searchBooks = createAsyncThunk(
//   'books/searchBooks',
//   async (query: string, { rejectWithValue }) => {
//     try {
//       const response = await axios.post<SearchBooksResponse>(
//         GRAPHQL_API_URL,
//         {
//           query: searchBooksQuery,
//           variables: { query },
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (response.data.errors) {
//         throw new Error(response.data.errors.map((error) => error.message).join(', '));
//       }

//       return response.data.data.searchBooks;
//     } catch (error) {
//       console.error('GraphQL request failed:', error);
//       return rejectWithValue(error.message);
//     }
//   }
// );
