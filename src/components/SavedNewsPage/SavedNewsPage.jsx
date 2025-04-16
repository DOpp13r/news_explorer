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
    <div className="news__page-saved">
      <div className="news__page-saved-header">
        <p className="news__page-saved-text">Saved articles</p>
        <p className="news__page-saved-title">
          {currentUser?.username}, you have {savedArticles.length} saved
          articles
        </p>
        <p className="news__page-saved-keywords">
          By keywords:{" "}
          <span className="news__page-saved-keywords__span">
            {keywords[0]}
            {keywords[1] ? `,  ${keywords[1]}` : ""}
            {keywords[2] ? `, and ${keywords.length - 2} other` : ""}
          </span>
        </p>
      </div>
      <ul className="news__page-saved-list">
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
