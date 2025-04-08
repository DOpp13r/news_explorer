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
    <form className="search-form" onSubmit={handleSearchClick}>
      <label className="search-form_label">
        <input
          className="search-form_input"
          type="text"
          placeholder="Enter topic"
          value={query}
          onChange={handleChange}
        />
      </label>
      <button className="search-form_button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
