import { FETCH_BOOKS_REQUEST } from '../actionTypes/actionTypes';
import { Book, BookActionTypes } from '@redux/types/types';

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

export { fetchBookReducer };
