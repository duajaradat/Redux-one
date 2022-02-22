import articlesReducer from "./articles";
import tagsReducer from "./tags";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  articles: articlesReducer,
  tags: tagsReducer,
});
export default allReducers;
