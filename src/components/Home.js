/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useFetchArticles } from "../actions";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

import Card from "./Card";
import Tags from "./Tags";
export default function Home() {
  const [articles, fetchArticles] = useFetchArticles();
  const selectedTag = useSelector((state) => state.tags.selectedTag);
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <main className="main">
        <div>
          <div className="global-feed">
            <ul className="global-list">
              <li className="gl-item">
                <a
                  href="#"
                  onClick={() => {
                    fetchArticles();
                  }}
                  className="all-articles"
                >
                  Global Feed
                </a>
              </li>
              {selectedTag && (
                <li className="gl-item">
                  <a href="#" className="gl-link">
                    {`# ${selectedTag}`}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {articles.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
        <Tags />
      </main>
      <Footer />
    </React.Fragment>
  );
}
