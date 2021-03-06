/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useFetchTags, useFetchTaggedArticles } from "../actions";

export default function Tags() {
  const [tags, fetchTags] = useFetchTags();
  const [taggedArticles, fetchTaggedArticles] = useFetchTaggedArticles();

  const uniqueTags = [...new Set(tags.tags)];
  console.log(taggedArticles);
  useEffect(() => {
    fetchTags();
  }, []);
  return (
    <div className="tags-card">
      <div className="tags-container">
        <p>Popular Tags</p>
        <div className="tag-list">
          {uniqueTags.map((tag, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={index}
              onClick={() => fetchTaggedArticles(tag)}
              href="javascript:void(0)"
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
