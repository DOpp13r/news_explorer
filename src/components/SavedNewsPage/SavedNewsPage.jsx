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
    <div className="saved__news_page">
      <div className="saved__news_page-header">
        <p className="saved__news_page-text">Saved articles</p>
        <p className="saved__news_page-title">
          {currentUser?.username}, you have {savedArticles.length} saved
          articles
        </p>
        <p className="saved__news_page-keywords">
          By keywords:{" "}
          <span className="saved__news_page-keywords-span">
            {keywords[0]}
            {keywords[1] ? `,  ${keywords[1]}` : ""}
            {keywords[2] ? `, and ${keywords.length - 2} other` : ""}
          </span>
        </p>
      </div>
      <ul className="saved__news-list">
        {savedArticles.map((item) => (
          <NewsCard
            key={item._id}
            item={item}
            isBookmarked={true}
            isLoggedIn={true}
            onBookmark={() => handleDeleteArticle(item.url)}
          />
        ))}
      </ul>
    </div>
  );
}

export default SavedNewsPage;
