import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main() {
  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <SearchForm />
      </div>
    </main>
  );
}

export default Main;
