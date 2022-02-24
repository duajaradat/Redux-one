import React from "react";
import { Link } from "react-router-dom";
import { isValidToken } from "../helper/tokens";

export default function Card({ article }) {
  function formatDate(string) {
    const date = new Date(string);
    return date.toDateString();
  }
  const handleFav = () => {
    console.log("like");
  };
  return (
    <div className="article-container">
      <div className="article-items">
        <Link className="author-img-link" to="/article">
          <img className="author-img" src={article.author.image} />
        </Link>

        <div className="info">
          <a className="author" href="#">
            {article.author.username}
          </a>
          <span className="date">{formatDate(article.createdAt)}</span>
        </div>
        {isValidToken() && (
          <div className="btn-container">
            <button onClick={handleFav} className="btn-fav">
              <i className="fa fa-heart" aria-hidden="true"></i>
              {article.favoritesCount}
            </button>
          </div>
        )}
      </div>
      <a className="items-body" href="#">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        {article.tagList.map((tag, idx) => (
          <ul key={idx} className="tag-badge">
            <li className="badge-item">{tag}</li>
          </ul>
        ))}
      </a>
    </div>
  );
}
