import React, { useEffect } from "react";
import "./SavedNewsPage.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNewsPage({
  savedArticles,
  currentUser,
  handleDeleteArticle,
  keywords,
  setKeywords,
}) {
  useEffect(() => {
    const allKeywords = savedArticles
      .map((article) => article.keyword)
      .filter((keyword) => keyword);
    const uniqueKeywords = [...new Set(allKeywords)];

    setKeywords(uniqueKeywords);
  }, [savedArticles]);

  return (
    <div className="news-page--saved">
      <div className="news-page--saved__header">
        <p className="news-page--saved__text">Saved articles</p>
        <p className="news-page--saved__title">
          {currentUser?.username}, you have {savedArticles.length} saved
          articles
        </p>
        <p className="news-page--saved__keywords">
          By keywords:{" "}
          <span className="news-page--saved__keywords__span">
            {keywords[0]}
            {keywords[1] ? `,  ${keywords[1]}` : ""}
            {keywords[2] ? `, and ${keywords.length - 2} other` : ""}
          </span>
        </p>
      </div>
      <ul className="news-page--saved__list">
        {savedArticles.map((item) => (
          <NewsCard
            key={item._id}
            item={item}
            isBookmarked={true}
            isLoggedIn={true}
            onBookmark={() => handleDeleteArticle(item._id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default SavedNewsPage;
