import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiFillVideoCamera,
  AiOutlineSend,
  AiOutlineAppstore,
  AiOutlineCaretDown,
  AiFillCalculator,
  AiFillCamera,
  AiOutlineUsergroupAdd,
  AiFillRead,
  AiFillGithub,
  AiFillHeart,
} from "react-icons/ai";
import { FaCat, FaFish, FaExternalLinkAlt } from "react-icons/fa";
import TagsList from "./TagsList";
import BreedsList from "./BreedsList";
import CommunitiesList from "./CommunitiesList";
import { useDispatch } from "react-redux";
import { setShowNav, setActiveSuggestionButton } from "../store/slices/uiSlice";
import { fetchCatImagesAsync } from "../store/slices/catImageSlice";

function NavigationOptions() {
  const [showSubOptions, setShowSubOptions] = useState({
    showTags: false,
    showBreeds: false,
    showCommunities: false,
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFullListClick = () => {
    navigate("selection");
    dispatch(setShowNav(false))
  };

  const handleRandomClick = () => {
    dispatch(setShowNav(false))
    dispatch(fetchCatImagesAsync())
    dispatch(setActiveSuggestionButton("Random"))
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
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiFillVideoCamera />
              <p className="navigation__option-topic-name">Videos</p>
            </div>
          </div>
        </li>
        <li>
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiOutlineSend className="navigation__shorties" />
              <p className="navigation__option-topic-name">Shorties</p>
            </div>
          </div>
        </li>
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
          {showSubOptions.showTags && <TagsList handleFullListClick={handleFullListClick}/>}
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
          {showSubOptions.showBreeds && <BreedsList handleFullListClick={handleFullListClick}/>}
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
          <div className="navigation__option">
            <div className="navigation__option-topic">
              <AiFillCamera />
              <p className="navigation__option-topic-name">Photos</p>
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
      <div className="navigation__membership">
        <p>Get Full CatHub Membership</p>
      </div>
      <div className="navigation__other-options">
        <a href="google.com" className="navigation__other-option">
          <FaFish />
          <p>Treats</p>
        </a>
        <a href="google.com" className="navigation__other-option">
          <AiFillRead />
          <p>Breed Info</p>
        </a>
        <a
          href="https://www.webmd.com/pets/cats/default.htm"
          className="navigation__other-option"
        >
          <AiFillHeart />
          <p>
            Cat Health <FaExternalLinkAlt />
          </p>
        </a>
        <a
          href="https://www.arealme.com/what-kind-of-cat-are-you/en/"
          className="navigation__other-option"
        >
          <AiFillGithub />
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
}

export default NavigationOptions;
