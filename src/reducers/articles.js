import {
  FETCH_ARTICLES,
  FETCH_TAGGED_ARTICLES,
} from "../actions/actionVariables";

const articlesReducer = (state = [], action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_ARTICLES:
      return [...action.payload];
    case FETCH_TAGGED_ARTICLES:
      return [...action.payload];
    default:
      return state;
  }
};
export default articlesReducer;
