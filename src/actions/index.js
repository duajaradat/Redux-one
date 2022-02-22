import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_TAGS,
  FETCH_ARTICLES,
  FETCH_TAGGED_ARTICLES,
  SET_SELECT_TAGS,
} from "./actionVariables";

export const useFetchTags = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags);

  const fetchTags = async () => {
    const response = await axios.get("https://api.realworld.io/api/tags");
    dispatch({
      type: FETCH_TAGS,
      payload: response.data.tags,
    });
  };

  return [tags, fetchTags];
};

export const useFetchArticles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const fetchArticles = async () => {
    const response = await axios.get(
      "https://api.realworld.io/api/articles?limit=10&offset=0"
    );

    dispatch({
      type: FETCH_ARTICLES,
      payload: response.data.articles,
    });
    dispatch({
      type: SET_SELECT_TAGS,
      payload: null,
    });
  };
  return [articles, fetchArticles];
};

export const useFetchTaggedArticles = () => {
  const dispatch = useDispatch();
  const taggedArticles = useSelector((state) => state.articles);
  const fetchTaggedArticles = async (tag) => {
    const response = await axios.get(
      `https://api.realworld.io/api/articles?tag=${tag}&limit=10&offset=0`
    );
    dispatch({
      type: FETCH_TAGGED_ARTICLES,
      payload: response.data.articles,
    });
    dispatch({
      type: SET_SELECT_TAGS,
      payload: tag,
    });
  };
  return [taggedArticles, fetchTaggedArticles];
};
