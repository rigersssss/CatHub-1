import { useState, useEffect} from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineUnorderedList,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import logo from "../images/logo.png";
import headerImage from "../images/header-image.png";
import Catsino from "./Catsino";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showCatsino, setShowCatsino] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (showNav || showCatsino) {
      document.body.classList.add("body-overflow-hidden");
    } else {
      document.body.classList.remove("body-overflow-hidden");
    }
  }, [showNav, showCatsino]);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleCatsinoClick = () => {
    setShowCatsino(!showCatsino)
  }

  return (
    <div>
      <header className="header">
        <div className="header__top-nav">
          <div className="header__burger-container header__container">
            <button
              className="header__icon header__icon--burger"
              onClick={handleShowNav}
            >
              <AiOutlineUnorderedList />
            </button>
          </div>
          <div className="header__logo-container header__container">
            <button onClick={handleLogoClick}>
              <img src={logo} alt="website logo" className="header__logo" />
            </button>
          </div>
          <div className="header__main-icons-container header__container">
            <button className="header__icon header__icon--search">
              <AiOutlineSearch />
            </button>
            <button className="header__icon header__icon--user">
              <AiOutlineUser />
            </button>
          </div>
        </div>
        <div className="header__bottom-nav-container">
          <div className="header__bottom-nav">
            <button className="header__bottom-button">More cats</button>
          </div>
          <div className="header__bottom-nav">
            <button className="header__bottom-button" onClick={handleCatsinoClick}>Catsino</button>
          </div>
          <div className="header__bottom-nav">
            <button className="header__bottom-button"><a href="https://www.alleycat.org/">Help Cats 1 <FaExternalLinkAlt /></a></button>
          </div>
          <div className="header__bottom-nav">
          <button className="header__bottom-button"><a href="https://icatcare.org/">Help Cats 2 <FaExternalLinkAlt /></a></button>
          </div>
        </div>
      </header>
      <Navigation setShowNav={setShowNav} showNav={showNav} />
      <div className="header__image-box">
        <div className="header__image-text">
          <p>
            Cat<span className="header__image-text-orange">Hub</span> is an{" "}
            <span className="header__image-text-orange">alternative</span> to
            the{" "}
            <span className="header__image-text-orange">
              popular movie site
            </span>
            , is <span className="header__image-text-orange">dedicated</span> to{" "}
            <span className="header__image-text-orange">cat lovers.</span>
          </p>
        </div>
        <img
          src={headerImage}
          alt="white-brown cat"
          className="header__image"
        />
      </div>
      {showCatsino && <Catsino setShowCatsino={setShowCatsino}/>}
    </div>
  );
}

export default Header;
