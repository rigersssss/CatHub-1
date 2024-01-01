import {
  FaRegQuestionCircle,
  FaRegHeart,
  FaRegUserCircle,
  FaBrain,
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import BreedInfoContainer from "../components/BreedInfoContainer";
// Get all tag images
// const imagesContext = require.context("../images/cats/", false, /\.(jpg)$/);


function BreedsInfoPage() {
  return (
    <div className="breeds-info">
      <header className="breeds-info__header">
        <div className="breeds-info__header-image">
          <div className="breeds-info__header-image-filter">
            <h1 className="breeds-info__header-text breeds-info__h1">
              Welcome to the section where you can learn more about interesting
              breeds!
            </h1>
            <div className="breeds-info__header-split-containers">
              <div className="breeds-info__header-split-container breeds-info__header-split-container--1">
                <FaRegQuestionCircle className="breeds-info__header-text breeds-info__header-text--orange breeds-info__header-text--icon" />
                <p className="breeds-info__header-text breeds-info__header-text--orange breeds-info__header-text--how">
                  How it works?
                </p>
              </div>
              <div className="breeds-info__header-split-container breeds-info__header-split-container--2">
                <p className="breeds-info__header-text">
                  It's very simple, choose one of the many available breeds (67
                  to be precise), and after clicking, you will learn about
                  things such as:
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="breeds-info__below-header-container">
        <ul className="breeds-info__below-header-ol">
          <li className="breeds-info__below-header-li">
            <FaRegHeart className="breeds-info__li-icon" />
            Average lifespan
          </li>
          <li className="breeds-info__below-header-li">
            <FiActivity className="breeds-info__li-icon" />
            Physical activity
          </li>
          <li className="breeds-info__below-header-li">
            <FaRegUserCircle className="breeds-info__li-icon" />
            Attitude towards strangers
          </li>
          <li className="breeds-info__below-header-li">
            <FaBrain className="breeds-info__li-icon" />
            Various interesting facts and much more!
          </li>
        </ul>
        <p className="breeds-info__below-header-info">
          In addition to the above, you will find links to more detailed sources
          of information!
        </p>
        <p className="breeds-info__below-header-info breeds-info__below-header-info--orange">
          *Keep in mind that if you want to search for a specific breed, you can
          always use the <AiOutlineSearch className="breeds-info__glass-icon"/> icon in the top right corner
        </p>
      </div>
      <BreedInfoContainer />
    </div>
  );
}

export default BreedsInfoPage;
