import React, { useEffect, useState } from "react";
import { Routes } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [modalOpen, setModalOpen] = useState("");

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
        {/* <Routes> */}
        <div className="page__background">
          <Header handleSignInClick={handleSignInClick} />
          <Main />
        </div>
        <About />
        {/* </Routes> */}
        <Footer />
      </div>

      <LoginModal
        isOpen={modalOpen === "sign-in"}
        onClose={closeModal}
        handleSignUpClick={handleSignUpClick}
      />
      <RegisterModal
        isOpen={modalOpen === "sign-up"}
        onClose={closeModal}
        handleSignInClick={handleSignInClick}
      />
    </div>
  );
}

export default App;
