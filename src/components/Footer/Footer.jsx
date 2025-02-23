import "./Footer.css";

import githubLogo from "../../assets/github-icon.svg";
import facebookLogo from "../../assets/facebook-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <p className="footer__link">Home</p>
        <p className="footer__link">TripleTen</p>
        <div className="footer__link-icons">
          <a className="footer__link-icon" href="https://github.com/DOpp13r">
            <img
              className="footer__social-icon"
              alt="github logo"
              src={githubLogo}
            />
          </a>
          <a className="footer__link-icon" href="https://www.facebook.com/">
            <img
              className="footer__social-icon"
              alt="facebook logo"
              src={facebookLogo}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
