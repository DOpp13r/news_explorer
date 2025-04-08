import React, { useState } from "react";
import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

import NotFound from "../../assets/not-found-icon.svg";

function SearchResults({
  isLoggedIn,
  handleSaveBookmark,
  savedArticles,
  setSavedArticles,
  loading,
  searchSubmitted,
  searchQuery,
  searchResults,
}) {
  return (
    <div className="search__results">
      <section className="search__results-contents">
        <h2 className="search__results-header">Search results</h2>
        {loading ? (
          <div className="search__results-body">
            <Preloader />
          </div>
        ) : savedArticles.length > 0 ? (
          <>
            <NewsCardList
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              handleSaveBookmark={handleSaveBookmark}
            />
          </>
        ) : (
          searchSubmitted &&
          searchQuery && (
            <div className="search__results-no-results">
              <img
                className="search__results-not-found-image"
                src={NotFound}
                alt="Not Found"
              />
              <p className="search__results-not-found-text-header">
                Nothing found
              </p>
              <p className="search__results-not-found-text">
                Sorry, but nothing matched your search terms
              </p>
            </div>
          )
        )}
      </section>
    </div>
  );
}

export default SearchResults;
