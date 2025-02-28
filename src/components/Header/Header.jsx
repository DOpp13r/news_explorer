import { Link } from "react-router-dom";
import "./Header.css";

function Header({ handleSignInClick }) {
  return (
    <header className="header">
      {/* <Link to="/"> */}
      <p className="header__logo" alt="header logo">
        NewsExplorer
      </p>
      {/* </Link> */}
      <p className="header__tab" alt="header tab">
        Home
        <button
          className="header__signin"
          type="button"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
      </p>
    </header>
  );
}

export default Header;
