import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <div className="page__background">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
