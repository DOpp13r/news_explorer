import React from "react";
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
  if (!searchSubmitted) {
    return null;
  }
  return (
    <div className="search__results">
      <section className="search__results-contents">
        {loading ? (
          <div className="search__results-body">
            <Preloader />
          </div>
        ) : searchResults.length > 0 ? (
          <>
            <h2 className="search__results-header">Search results</h2>
            <NewsCardList
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              handleSaveBookmark={handleSaveBookmark}
              searchResults={searchResults}
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
