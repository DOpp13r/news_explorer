import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { defaultNewsCards } from "../../utils/constants";

function NewsCardList({
  isLoggedIn,
  savedArticles,
  setSavedArticles,
  handleSaveBookmark,
  searchResults,
}) {
  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards((prevValue) => prevValue + 3);
  };

  const cardsToDisplay = searchResults || defaultNewsCards;

  useEffect(() => {
    if (isLoggedIn) {
      const saved = localStorage.getItem("savedArticles");
      if (saved) {
        setSavedArticles(JSON.parse(saved));
      }
    } else {
      setSavedArticles([]);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && savedArticles.length > 0) {
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    }
  }, [savedArticles]);

  return (
    <div className="news__list-section">
      <ul className="news__list">
        {cardsToDisplay.slice(0, visibleCards).map((item) => {
          return (
            <NewsCard
              key={item._id}
              item={item}
              isBookmarked={savedArticles.some(
                (savedArticle) => savedArticle._id === item._id
              )}
              onBookmark={() => handleSaveBookmark(item)}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </ul>
      {visibleCards < cardsToDisplay.length && (
        <div className="news__list-button">
          <button
            className="news__list-show-more show-more-button"
            onClick={showMoreCards}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsCardList;
