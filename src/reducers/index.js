import articlesReducer from "./articles";
import tagsReducer from "./tags";
import authorization from "./authReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  articles: articlesReducer,
  tags: tagsReducer,
  user: authorization,
});
export default allReducers;
