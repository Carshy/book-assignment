// import * as actionType from '../actionTypes/actionTypes';

// const initialState = [];

// // Book fetching reducer
// const fetchBookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionType.FETCH_BOOKS_REQUEST:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export { fetchBookReducer };

import { FETCH_BOOKS_REQUEST } from '../actionTypes/actionTypes';
import { Book, BookActionTypes } from '@redux/types/types';

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

