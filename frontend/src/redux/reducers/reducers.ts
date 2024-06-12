import { FETCH_BOOKS_REQUEST } from '../actionTypes/actionTypes';
import { Book, BookActionTypes} from '@redux/types/types';

const initialState: Book[] = [];

// Book fetching reducer
const fetchBookReducer = (state = initialState, action: BookActionTypes): Book[] => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export { fetchBookReducer };
