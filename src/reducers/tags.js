import { FETCH_TAGS, SET_SELECT_TAGS } from "../actions/actionVariables";
const initialState = {
  tags: [],
  selectedTag: null,
};

const tagsReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_TAGS:
      return { ...state, tags: action.payload };
    case SET_SELECT_TAGS:
      return { ...state, selectedTag: action.payload };
    default:
      return state;
  }
};
export default tagsReducer;
