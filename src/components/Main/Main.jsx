import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";

function Main({
  isLoggedIn,
  handleSaveBookmark,
  savedArticles,
  searchResults,
  setSavedArticles,
  handleSearch,
  handleSearchSubmit,
  loading,
  searchSubmitted,
  searchQuery,
}) {
  return (
    <main className="main">
      <div className="main__content">
        <h2 className="main__title">What's going on in the world?</h2>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <SearchForm
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
          searchResults={searchResults}
        />
        <SearchResults
          isLoggedIn={isLoggedIn}
          handleSaveBookmark={handleSaveBookmark}
          savedArticles={savedArticles}
          searchResults={searchResults}
          setSavedArticles={setSavedArticles}
          loading={loading}
          searchSubmitted={searchSubmitted}
          searchQuery={searchQuery}
        />
        <About />
      </div>
    </main>
  );
}

export default Main;
