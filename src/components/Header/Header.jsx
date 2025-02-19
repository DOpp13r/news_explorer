import "./Header.css";

function Header() {
  return (
    <header className="header">
      <p className="header__logo" alt="header logo">
        NewsExplorer
      </p>
      <p className="header__tab" alt="header tab">
        Home
        <button className="header__signin" type="button">
          Sign In
        </button>
      </p>
    </header>
  );
}

export default Header;
