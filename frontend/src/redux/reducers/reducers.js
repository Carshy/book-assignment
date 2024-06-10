import * as actionType from '../actionTypes/actionTypes';

const initialState = [];

// Book fetching reducer
const fetchBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_BOOKS_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export { fetchBookReducer };
