import "./Navigation.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function Navigation({ isLoggedIn, handleSignInClick }) {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <div className="nav__links">
        {isLoggedIn ? (
          <div className="nav__links nav__links-logged-in">
            <button
              className={`nav__link ${
                pathname === "/saved-news" && "nav__link-saved"
              }`}
            >
              Home
            </button>
            <button
              className={`nav__link ${
                pathname === "/saved-news" && "nav__link-saved"
              }`}
            >
              Saved articles
            </button>
            <button className="nav__current-user">
              <p
                className={`nav__current-username ${
                  pathname === "/saved-news" && "nav__current-username-saved"
                }`}
              >
                Elise
              </p>
              <div
                className={`nav__link ${
                  pathname === "/saved-news"
                    ? "nav__current-user_signout-saved"
                    : "nav__current-user_signout"
                }`}
              ></div>
            </button>
          </div>
        ) : (
          <div className="nav__links nav__links-logged-out">
            <button className="nav__link">Home</button>
            <button className="nav__link" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
