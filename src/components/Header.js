import { useState} from "react";
import MobileNavigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineUnorderedList,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../images/logo.png";
import headerImage from "../images/header-image.png";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();


  const handleLogoClick = () => {
    navigate("/");
  };

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

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
            <button className="header__bottom-button">Catsino</button>
          </div>
          <div className="header__bottom-nav">
            <button className="header__bottom-button">Feed Cats 1</button>
          </div>
          <div className="header__bottom-nav">
            <button className="header__bottom-button">Feed Cats 2</button>
          </div>
        </div>
      </header>
      <MobileNavigation setShowNav={setShowNav} showNav={showNav} />
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
    </div>
  );
}

export default Header;
