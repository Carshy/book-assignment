import { FETCH_BOOKS_REQUEST } from "@redux/actionTypes/actionTypes";

// types fetch books
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
  
  export type BookActionTypes = FetchBooksRequestAction;
  