import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { defaultNewsCards } from "../../utils/constants";

function NewsCardList({
  isLoggedIn,
  savedArticles,
  setSavedArticles,
  handleSaveBookmark,
}) {
  const [visibleCards, setVisibleCards] = useState(3);

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

  const showMoreCards = () => {
    setVisibleCards((prevValue) => prevValue + 3);
  };

  return (
    <div className="card__list-section">
      <ul className="card__list">
        {defaultNewsCards.slice(0, visibleCards).map((item) => {
          return (
            <NewsCard
              key={item._id}
              item={item}
              isBookmarked={savedArticles.includes(item._id)}
              onBookmark={() => handleSaveBookmark(item._id)}
              isLoggedIn={isLoggedIn}
              defaultNewsCards={defaultNewsCards}
            />
          );
        })}
      </ul>
      {visibleCards < defaultNewsCards.length && (
        <div className="card__list-button">
          <button
            className="card__list-show-more show-more-button"
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
