import "./Footer.css";

import githubLogo from "../../assets/github-icon.svg";
import facebookLogo from "../../assets/facebook-icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2025 Supersite, Powered by News API</p>
      <nav className="footer__links">
        <Link to="/" className="footer__link">
          Home
        </Link>
        <a
          className="footer__link"
          href="https://tripleten.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TripleTen
        </a>
      </nav>
      <nav className="footer__logos">
        <div className="footer__link-icons">
          <a
            className="footer__link"
            href="https://github.com/DOpp13r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__social-icon"
              alt="github logo"
              src={githubLogo}
            />
          </a>
          <a
            className="footer__link"
            href="https://www.facebook.com/tripleten.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__social-icon"
              alt="facebook logo"
              src={facebookLogo}
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
