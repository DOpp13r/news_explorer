import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logoutIcon from "../../assets/logout-icon.svg";
import menuIcon from "../../assets/menu-icon.svg";
import closeButton from "../../assets/close-icon.svg";

function Header({ handleSignInClick, isLoggedIn, handleLogout, currentUser }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isNewsPage = location.pathname === "/saved-news";

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isNewsPage ? "header_theme_dark" : ""}`}>
      <Link to="/" className="header__logo-link">
        <h1 className="header__logo">NewsExplorer</h1>
      </Link>

      <nav className="header__tab" alt="header tab">
        <Link
          to="/"
          className={`header__link ${
            !isNewsPage ? "header__link--active" : ""
          }`}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            to="/saved-news"
            className={`header__link ${
              isNewsPage ? "header__link--active" : ""
            }`}
          >
            Saved articles
          </Link>
        )}

        {isLoggedIn ? (
          <button className="header__logout" onClick={handleLogout}>
            <span className="header__logout-text">{currentUser?.username}</span>
            <img
              className="header__logout-icon"
              alt="Logout"
              src={logoutIcon}
            />
          </button>
        ) : (
          <button className="header__signin" onClick={handleSignInClick}>
            Sign in
          </button>
        )}
      </nav>
      <button
        className="header__menu-button"
        type="button"
        onClick={handleMenuClick}
      >
        <img src={menuIcon} alt="Menu" />
      </button>
      <div
        className={`header__mobile-menu ${
          menuOpen ? "header__mobile-menu_opened" : ""
        }`}
      >
        <div className="header__mobile-container">
          <div className="header__mobile-top">
            <Link to="/" className="header__logo-link">
              <h1 className="header__logo">NewsExplorer</h1>
            </Link>
            <button
              className="header__close-button"
              type="button"
              onClick={handleMenuClick}
            >
              <img src={closeButton} alt="Close" />
            </button>
          </div>

          <nav className="header__mobile-nav">
            <Link
              to="/"
              className={`header__mobile-link ${
                !isNewsPage ? "header__mobile-link--active" : ""
              }`}
              onClick={handleMenuClick}
            >
              Home
            </Link>

            {isLoggedIn && (
              <>
                <Link
                  to="/saved-news"
                  className={`header__mobile-link ${
                    isNewsPage ? "header__mobile-link--active" : ""
                  }`}
                  onClick={handleMenuClick}
                >
                  Saved articles
                </Link>
                <button
                  className="header__mobile-logout"
                  type="button"
                  onClick={() => {
                    handleLogout();
                    handleMenuClick();
                  }}
                >
                  <span className="header__mobile-logout-text">
                    {currentUser?.username}
                  </span>
                  <img
                    className="header__mobile-logout-icon"
                    alt="Logout"
                    src={logoutIcon}
                  />
                </button>
              </>
            )}
            {!isLoggedIn && (
              <button
                className="header__mobile-signin"
                type="button"
                onClick={() => {
                  handleSignInClick();
                  handleMenuClick();
                }}
              >
                Sign In
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
