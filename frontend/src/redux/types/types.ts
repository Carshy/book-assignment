import { FETCH_BOOKS_REQUEST, SEARCH_BOOKS_REQUEST, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_FAILURE, CLEAR_BOOK_LIST, UPDATE_BOOKS_LOADED } from "@redux/actionTypes/actionTypes";
// import { FETCH_BOOKS_REQUEST, SEARCH_BOOKS_REQUEST } from "@redux/actionTypes/actionTypes";
// Types fetch books
export interface Book {
  id: string
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

export interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}
  
export interface FetchBooksRequestAction {
  type: typeof FETCH_BOOKS_REQUEST;
  payload: Book[];
}

export interface SearchBooksRequestAction {
  type: typeof SEARCH_BOOKS_REQUEST;
  payload: Book[];
}


export interface SearchBooksSuccessAction {
  type: typeof SEARCH_BOOKS_SUCCESS;
  payload: Book[];
}

export interface SearchBooksFailureAction {
  type: typeof SEARCH_BOOKS_FAILURE;
  payload: string;
}

export interface ClearBookListAction {
  type: typeof CLEAR_BOOK_LIST;
}

export interface UpdateBooksLoadedAction {
  type: typeof UPDATE_BOOKS_LOADED;
  payload: number;
}

export type FetchState = 'pending' | 'fulfilled';

export type BookActionTypes = FetchBooksRequestAction
| ClearBookListAction
| UpdateBooksLoadedAction;
  