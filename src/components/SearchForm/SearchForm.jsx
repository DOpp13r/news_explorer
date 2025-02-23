import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <label className="search-form_label">
        <input
          className="search-form_input"
          type="text"
          placeholder="Enter topic"
        />
      </label>
      <button className="search-form_button">Search</button>
    </form>
  );
}

export default SearchForm;
