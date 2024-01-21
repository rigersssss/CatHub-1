import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineAppstore,
  AiOutlineCaretDown,
  AiFillCalculator,
  AiOutlineUsergroupAdd,
  AiFillRead,
  AiFillGithub,
  AiFillHeart,
  AiFillFilePpt,
} from "react-icons/ai";
import { FaCat, FaExternalLinkAlt } from "react-icons/fa";
import TagsList from "./TagsList";
import BreedsList from "./BreedsList";
import CommunitiesList from "./CommunitiesList";
import { useDispatch} from "react-redux";
import { setShowNav, setActiveSuggestionButton} from "../store/slices/uiSlice";
import { fetchCatImagesAsync } from "../store/slices/catImageSlice";
import scrollToImages from "../helpers/scroll";

function NavigationOptions() {
  const [showSubOptions, setShowSubOptions] = useState({
    showTags: false,
    showBreeds: false,
    showCommunities: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMembershipClick = () => {
    console.log("Membership clicked");
  };

  const handleFullListClick = (section) => {
    navigate("selection");
    dispatch(setShowNav(false));
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(`${section}-selection`);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const handleRandomClick = () => {
    navigate("/");
    dispatch(setShowNav(false));
    dispatch(fetchCatImagesAsync());
    dispatch(setActiveSuggestionButton("Random"));
    scrollToImages();
  };

  const handleBreedsInfoClick = () => {
    navigate("breedsinfo");
    dispatch(setShowNav(false));
  };

  const handlePrivacyPolicyClick = () => {
    navigate("privacypolicy")
    dispatch(setShowNav(false));
  }

  const handleSubListClick = (data) => {
    switch (data) {
      case "tags":
        setShowSubOptions({
          ...showSubOptions,
          showTags: !showSubOptions.showTags,
        });
        break;
      case "breeds":
        setShowSubOptions({
          ...showSubOptions,
          showBreeds: !showSubOptions.showBreeds,
        });
        break;
      case "communities":
        setShowSubOptions({
          ...showSubOptions,
          showCommunities: !showSubOptions.showCommunities,
        });
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  };

  return (
    <div>
      <ul className="navigation__options-list">
        <li>
          <div
            className="navigation__option"
            onClick={() => {
              handleSubListClick("tags");
            }}
          >
            <div className="navigation__option-topic">
              <AiOutlineAppstore />
              <p className="navigation__option-topic-name">Tags</p>
            </div>
            <div className="navigation__option-more">
              <AiOutlineCaretDown />
            </div>
          </div>
          {showSubOptions.showTags && (
            <TagsList handleFullListClick={handleFullListClick} />
          )}
        </li>
        <li>
          <div
            className="navigation__option"
            onClick={() => {
              handleSubListClick("breeds");
            }}
          >
            <div className="navigation__option-topic">
              <FaCat />
              <p className="navigation__option-topic-name">Breeds</p>
            </div>
            <div className="navigation__option-more">
              <AiOutlineCaretDown />
            </div>
          </div>
          {showSubOptions.showBreeds && (
            <BreedsList handleFullListClick={handleFullListClick} />
          )}
        </li>
        <li>
          <div className="navigation__option" onClick={handleRandomClick}>
            <div className="navigation__option-topic">
              <AiFillCalculator />
              <p className="navigation__option-topic-name">Random</p>
            </div>
          </div>
        </li>
        <li>
          <div className="navigation__option" onClick={handleBreedsInfoClick}>
            <div className="navigation__option-topic">
              <AiFillRead />
              <p className="navigation__option-topic-name">Breeds Info</p>
            </div>
          </div>
        </li>
        <li>
          <div
            className="navigation__option"
            onClick={() => {
              handleSubListClick("communities");
            }}
          >
            <div className="navigation__option-topic">
              <AiOutlineUsergroupAdd />
              <p className="navigation__option-topic-name">Communities</p>
            </div>
            <div className="navigation__option-more">
              <AiOutlineCaretDown />
            </div>
          </div>
          {showSubOptions.showCommunities && <CommunitiesList />}
        </li>
      </ul>
      <button className="navigation__membership" onClick={handleMembershipClick}>
        Get Full CatHub Membership
      </button>
      <p className="navigation__preview">*Above button is only for a preview</p>
      <div className="navigation__other-options">
        <button href="google.com" className="navigation__other-option" onClick={handlePrivacyPolicyClick}>
          <AiFillFilePpt className="navigation__other-option-icon"/>
          <p>Privacy Policy</p>
        </button>
        <button className="navigation__other-option" onClick={handleBreedsInfoClick}>
          <AiFillRead className="navigation__other-option-icon"/>
          <p>Breeds Info</p>
        </button>
        <a
          href="https://www.webmd.com/pets/cats/default.htm"
          className="navigation__other-option"
        >
          <AiFillHeart className="navigation__other-option-icon"/>
          <p>
            Cat Health <FaExternalLinkAlt />
          </p>
        </a>
        <a
          href="https://www.arealme.com/what-kind-of-cat-are-you/en/"
          className="navigation__other-option"
        >
          <AiFillGithub className="navigation__other-option-icon"/>
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
}

export default NavigationOptions;
