import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationCompleteModal from "../RegistrationCompleteModal/RegistrationCompleteModal";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { getItems } from "../../utils/api";
import { authorize, checkToken, signup } from "../../utils/auth";
import { defaultNewsCards } from "../../utils/constants";

function App() {
  const [modalOpen, setModalOpen] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("jwt") ? true : false;
  });
  const [loginError, setLoginError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState(defaultNewsCards);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [error, setError] = useState("");

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    setError("");
  };

  const handleSearchSubmit = () => {
    fetchArticles(searchQuery);
    setKeywords([searchQuery]);
    setSearchSubmitted(true);
  };

  const fetchArticles = async (query) => {
    if (!query) {
      setError("Please enter a keyword");
      return;
    }
    setLoading(true);
    try {
      const data = await getItems(query);
      if (data.length === 0) {
        setError("Sorry, no articles matched.");
      }
      setSearchResults(data);
    } catch (err) {
      setError(
        "Sorry, we couldn't find any articles matching your search query."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBookmark = (article) => {
    console.log("Current saved articles:", savedArticles);
    console.log("Article being saved/unsaved:", article);
    setSavedArticles((prevSavedArticles) => {
      const isAlreadySaved = prevSavedArticles.some(
        (savedArticle) => savedArticle._id === article._id
      );
      const newSavedArticles = isAlreadySaved
        ? prevSavedArticles.filter(
            (savedArticle) => savedArticle._id !== article._id
          )
        : [...prevSavedArticles, article];

      localStorage.setItem("savedArticles", JSON.stringify(newSavedArticles));

      return newSavedArticles;
    });
  };

  useEffect(() => {
    const savedArticlesFromStorage = localStorage.getItem("savedArticles");
    if (savedArticlesFromStorage) {
      setSavedArticles(JSON.parse(savedArticlesFromStorage));
    }
  }, []);

  const handleDeleteArticle = (url) => {
    const updatedArticles = savedArticles.filter(
      (article) => article.url !== url
    );

    setSavedArticles(updatedArticles);

    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
  };

  const handleRegister = (values) => {
    return signup(values)
      .then(() => {
        setModalOpen("register-complete");
      })
      .catch((err) => {
        console.error("An error occurred during registration:", err);
      });
  };

  const handleLogin = ({ email, password }, setIsSubmitting) => {
    setIsSubmitting(true);
    authorize({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          console.log("User successfully logged in:", res);
          return getCurrentUser();
        } else {
          throw new Error("Token is not received");
        }
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        closeModal();
        navigate("/saved-news");
      })
      .catch((err) => {
        console.error("Error logging in:", err);
        setLoginError("Please enter a valid email and password");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getCurrentUser()
        .then(() => {
          console.log("Token validated");
        })
        .catch((err) => {
          console.error("Error validating token:", err);
        });
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    setCurrentUser(null);

    navigate("/News-Explorer");
  };

  const getCurrentUser = () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return Promise.reject("No token found");
    }
    return checkToken(token)
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoggedIn(true);
        return res.data;
      })
      .catch((err) => {
        console.error("Error fetching user information:", err);
        setIsLoggedIn(false);
        setCurrentUser(null);
        localStorage.removeItem("jwt");
        throw err;
      });
  };

  const handleSignInClick = () => {
    console.log("Ready to Log In");
    setModalOpen("sign-in");
  };

  const handleSignUpClick = () => {
    console.log("Ready to Sign Up");
    setModalOpen("sign-up");
  };

  const closeModal = () => {
    setModalOpen("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <div
          className={` ${
            pathname === "/saved-news"
              ? "page__background_saved"
              : "page__background"
          }`}
        >
          <Header
            isLoggedIn={isLoggedIn}
            handleSignInClick={handleSignInClick}
            handleLogout={handleLogout}
            currentUser={currentUser}
          />
          <Routes>
            <Route
              path="/News-Explorer"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  setSavedArticles={setSavedArticles}
                  handleSaveBookmark={handleSaveBookmark}
                  handleSearch={handleSearch}
                  handleSearchSubmit={handleSearchSubmit}
                  searchResults={searchResults}
                  loading={loading}
                  searchSubmitted={searchSubmitted}
                  searchQuery={searchQuery}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNewsPage
                    isLoggedIn={isLoggedIn}
                    savedArticles={savedArticles}
                    currentUser={currentUser}
                    handleDeleteArticle={handleDeleteArticle}
                    keywords={keywords}
                    setKeywords={setKeywords}
                  />
                </ProtectedRoute>
              }
            >
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/saved-news" replace />
                  ) : (
                    <Navigate to="/News-Explorer" replace />
                  )
                }
              />
            </Route>
          </Routes>
          <Footer />
        </div>
      </div>

      <LoginModal
        isOpen={modalOpen === "sign-in"}
        onClose={closeModal}
        handleSignUpClick={handleSignUpClick}
        handleLogin={handleLogin}
        loginError={loginError}
        setLoginError={setLoginError}
      />
      <RegisterModal
        isOpen={modalOpen === "sign-up"}
        onClose={closeModal}
        handleRegister={handleRegister}
        handleSignInClick={handleSignInClick}
      />
      <RegistrationCompleteModal
        isOpen={modalOpen === "register-complete"}
        onClose={closeModal}
        handleSignInClick={handleSignInClick}
      />
    </div>
  );
}

export default App;
