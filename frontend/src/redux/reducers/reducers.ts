import { FETCH_BOOKS_REQUEST, SEARCH_BOOKS_REQUEST, SEARCH_BOOKS_SUCCESS, SEARCH_BOOKS_FAILURE } from '../actionTypes/actionTypes';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import { Book, BookActionTypes} from '@redux/types/types';
// import { fetchBookSearches } from '../actions/actionCreate';
// import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes/actionTypes';

const initialState1: Book[] = [];

// Book fetching reducer
const fetchBookReducer = (state = initialState1, action: BookActionTypes): Book[] => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

// **********Book searching reducer*******************
interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

const searchBookReducer = (state = initialState, action: any): BookState => {
  switch (action.type) {
    case SEARCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case SEARCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { fetchBookReducer, searchBookReducer };
