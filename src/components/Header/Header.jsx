import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logoutIcon from "../../assets/logout-icon.svg";

function Header({ handleSignInClick, isLoggedIn, handleLogout, currentUser }) {
  const location = useLocation();
  const isNewsPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isNewsPage ? "header_theme_dark" : ""}`}>
      <Link
        to="/News-Explorer"
        className={`header__link ${
          location.pathname === "/News-Explorer" ? "active" : ""
        }`}
      >
        <h1 className="header__logo">NewsExplorer</h1>
      </Link>
      <p className="header__tab" alt="header tab">
        <Link
          to="/News-Explorer"
          className={`header__link header__home ${
            !isNewsPage ? "header__home-link" : ""
          }`}
        >
          Home
        </Link>

        {isLoggedIn && (
          <>
            <Link
              to="/saved-news"
              className={`header__link header__articles ${
                isNewsPage ? "header__articles-link" : ""
              }`}
            >
              Saved articles
            </Link>
            <button
              className="header__logout"
              type="button"
              onClick={handleLogout}
            >
              <span className="header__logout-text">
                {currentUser?.username}
              </span>
              <img
                className="header__logout-icon"
                alt="Logout"
                src={logoutIcon}
              />
            </button>
          </>
        )}
        {!isLoggedIn && (
          <button
            className="header__signin"
            type="button"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        )}
      </p>
    </header>
  );
}

export default Header;
