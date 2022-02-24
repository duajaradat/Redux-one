/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useFetchTags, useFetchTaggedArticles } from "../actions";

export default function Tags() {
  const [tags, fetchTags] = useFetchTags();
  const [taggedArticles, fetchTaggedArticles] = useFetchTaggedArticles();

  const uniqueTags = [...new Set(tags.tags)];
  useEffect(() => {
    fetchTags();
  }, []);
  return (
    <div className="tags-card">
      <div className="tags-container">
        <p>Popular Tags</p>
        <div className="tag-list">
          {uniqueTags.map((tag, index) => (
            <a
              key={index}
              onClick={() => fetchTaggedArticles(tag)}
              href="#"
              className="tag-name"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
