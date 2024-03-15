import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineUnorderedList,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import logo from "../images/logo.png";
import Catsino from "./Catsino";
import SearchInput from "./SearchInput";
import HeaderImage from "./HeaderImage";
import UserSidePanel from "./UserSidePanel";
import {
  selectShowNav,
  setShowNav,
  selectShowUserSidePanel,
  setShowUserSidePanel,
  setShowPopup
} from "../store/slices/uiSlice";
import { setUserSelectedBreed, fetchCatImagesAsync } from "../store/slices/catImageSlice";
import { setDisplayedBreedName, setActiveSuggestionButton } from "../store/slices/uiSlice";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showCatsino, setShowCatsino] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const showNav = useSelector(selectShowNav);
  const showUserSidePanel = useSelector(selectShowUserSidePanel);

  useEffect(() => {
    if (showNav || showCatsino || showUserSidePanel) {
      document.body.classList.add("body-overflow-hidden");
    } else {
      document.body.classList.remove("body-overflow-hidden");
    }
  }, [showNav, showCatsino, showUserSidePanel]);

  const handleLogoClick = () => {
    navigate("/");
    dispatch(setUserSelectedBreed("Random")); // object with breed name and id
    dispatch(setActiveSuggestionButton("Random")); // add class to button so it looks like it was clicked
    dispatch(fetchCatImagesAsync("Random")); // fetching images with id of the chosen breed
    dispatch(setDisplayedBreedName("Random")); // setting breed name as text in main__h2
  };

  const handleMoreCatsClick = () => {
    navigate("selection");
  };

  const handleShowNav = () => {
    dispatch(setShowNav(!showNav));
  };

  const handleShowUserSidePanel = () => {
    dispatch(setShowUserSidePanel(!showUserSidePanel));
    dispatch(setShowPopup({show: true,text:"User side panel is only for a preview"}))
  };

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleCatsinoClick = () => {
    setShowCatsino(!showCatsino);
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
            <button className="header__icon header__icon--user">
              <AiOutlineUser onClick={handleShowUserSidePanel} />
            </button>
          </div>
          <div className="header__logo-container header__container">
            <button onClick={handleLogoClick}>
              <img src={logo} alt="website logo" className="header__logo" />
            </button>
          </div>
          <div className="header__main-icons-container header__container">
            <button className="header__icon header__icon--search">
              <AiOutlineSearch onClick={handleShowSearch} />
            </button>
          </div>
        </div>
        {showSearch && <SearchInput />}
        <div className="header__bottom-nav-container">
          <div className="header__bottom-nav">
            <button
              className="header__bottom-button"
              onClick={handleMoreCatsClick}
            >
              More cats
            </button>
          </div>
          <div className="header__bottom-nav">
            <button
              className="header__bottom-button"
              onClick={handleCatsinoClick}
            >
              Catsino
            </button>
          </div>
          <div className="header__bottom-nav">
            <button className="header__bottom-button">
              <a href="https://www.alleycat.org/">
                Help Cats 1 <FaExternalLinkAlt />
              </a>
            </button>
          </div>
          <div className="header__bottom-nav">
            <button className="header__bottom-button">
              <a href="https://icatcare.org/">
                Help Cats 2 <FaExternalLinkAlt />
              </a>
            </button>
          </div>
        </div>
        {location.pathname === "/" && <HeaderImage />}
      </header>
      <Navigation />
      <UserSidePanel />
      {showCatsino && <Catsino setShowCatsino={setShowCatsino} />}
    </div>
  );
}

export default Header;
