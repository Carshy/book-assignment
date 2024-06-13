import { FETCH_BOOKS_REQUEST } from "@redux/actionTypes/actionTypes";

// Types fetch books
export interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}
  
export interface FetchBooksRequestAction {
  type: typeof FETCH_BOOKS_REQUEST;
  payload: Book[];
}

// Types for searching books
export type FetchedBook = {
  "title": string,
}
  
export type FetchedBooks = { "books": Array<FetchedBook> };

export type SearchedBook = {
  id: string;
  title: string;
}

export type FetchState = 'pending' | 'fulfilled';

export type BookActionTypes = FetchBooksRequestAction;
  