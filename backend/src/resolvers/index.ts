import { booksData } from '../data/books';

export const resolvers = {
  Query: {
    books: () => booksData,
    searchBooks: (_: any, { query }: { query: string }) => {
      const lowerCaseQuery = query.toLowerCase();
      return booksData.filter(book =>
        book.title.toLowerCase().includes(lowerCaseQuery)
      );
    },
  },
};
