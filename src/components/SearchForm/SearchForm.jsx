import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ handleSearch, handleSearchSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    handleSearchSubmit(query);
  };

  return (
    <form className="search__form" onSubmit={handleSearchClick}>
      <label className="search__form-label">
        <input
          className="search__form-input"
          type="text"
          placeholder="Enter topic"
          value={query}
          onChange={handleChange}
        />
      </label>
      <button className="search__form-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
