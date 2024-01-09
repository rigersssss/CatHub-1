import {
  FaRegQuestionCircle,
  FaRegHeart,
  FaRegUserCircle,
  FaBrain,
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import BreedInfoContainer from "../components/BreedInfoContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectCatBreeds,
  fetchCatBreedsAsync,
} from "../store/slices/catImageSlice";

// Get all breed images
const imagesContext = require.context("../images/cats/", false, /\.(jpg)$/);

function BreedsInfoPage() {
  const catInfo = useSelector(selectCatBreeds);
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(null);
  const [showSort, setShowSort] = useState({
    type: false,
    data: false,
    sortType: "",
    sortData: "",
    selectedTypeButton: null,
    selectedDataButton: null,
  });

  useEffect(() => {
    if (catInfo.length === 0) {
      dispatch(fetchCatBreedsAsync());
    }
  }, [dispatch, catInfo]);

  // Ignore s p a c e s, CAPITAL LETTERS and-dashes
  const modifyBreedName = (name) =>
    name.toLowerCase().replace(/\s/g, "").replace(/-/g, "");

  const handleContainerClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleShowTypeClick = () => {
    setShowSort((prev) => ({ ...prev, type: !prev.type, data: false }));
  };

  const handleSortTypeClick = (type) => {
    setShowSort((prev) => ({
      ...prev,
      sortType: type,
      type: false,
      selectedTypeButton: type,
    }));
  };

  const handleShowDataClick = () => {
    setShowSort((prev) => ({ ...prev, data: !prev.data, type: false }));
  };

  const handleSortDataClick = (data) => {
    setShowSort((prev) => ({
      ...prev,
      sortData: data,
      data: false,
      selectedDataButton: data,
    }));
  };

  const handleResetClick = () => {
    setShowSort({
      type: false,
      data: false,
      sortType: "",
      sortData: "",
      selectedTypeButton: null,
      selectedDataButton: null,
    });
  };

  const dataOptions = [
    "Alphabet",
    "Energy",
    "Friendly",
    "Health",
    "Intelligence",
    "Lifespan",
    "Social",
    "Shedding",
    "Weight",
  ];

  const typeOptions = ["Ascending", "Descending"];

  // Sorting logic
  const sortCatInfo = (type, data) => {
    let sortedCatInfo = [...catInfo];
  
    switch (type) {
      case "Ascending":
        sortedCatInfo.sort((a, b) => {
          if (data === "Alphabet") {
            return a.name.localeCompare(b.name);
          } else if (data === "Energy") {
            return a.energy - b.energy;
          } else if (data === "Friendly") {
            return a.friendliness - b.friendliness;
          } else if (data === "Health") {
            return a.health - b.health;
          } else if (data === "Intelligence") {
            return a.intelligence - b.intelligence;
          } else if (data === "Lifespan") {
            return parseInt(a.lifespan.split("-")[0]) - parseInt(b.lifespan.split("-")[0]);
          } else if (data === "Shedding") {
            return a.shedding - b.shedding;
          } else if (data === "Weight") {
            return parseInt(a.weight.split("-")[0]) - parseInt(b.weight.split("-")[0]);
          }
          return 0;
        });
        break;
  
      case "Descending":
        sortedCatInfo.sort((a, b) => {
          if (data === "Alphabet") {
            return b.name.localeCompare(a.name);
          } else if (data === "Energy") {
            return b.energy - a.energy;
          } else if (data === "Friendly") {
            return b.friendliness - a.friendliness;
          } else if (data === "Health") {
            return b.health - a.health;
          } else if (data === "Intelligence") {
            return b.intelligence - a.intelligence;
          } else if (data === "Lifespan") {
            return parseInt(b.lifespan.split("-")[0]) - parseInt(a.lifespan.split("-")[0]);
          } else if (data === "Shedding") {
            return b.shedding - a.shedding;
          } else if (data === "Weight") {
            return parseInt(b.weight.split("-")[0]) - parseInt(a.weight.split("-")[0]);
          }
          return 0;
        });
        break;
  
      default:
        break;
    }
  
    return sortedCatInfo;
  };

  const sortedCatInfo = sortCatInfo(showSort.sortType, showSort.sortData);

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
                <FaRegQuestionCircle className="breeds-info__header-text breeds-info__header-text--icon" />
                <p className="breeds-info__header-text breeds-info__header-text--how">
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
          *If you want to search for a specific breed, you can always use the{" "}
          <AiOutlineSearch className="breeds-info__glass-icon" /> icon in the
          top right corner
        </p>
      </div>
      <div className="breeds-info__header-divider"></div>
      <div className="breeds-info__sort-big-container">
        <div className="breeds-info__sort-small-container">
          <button
            className="breeds-info__sort-button breeds-info__sort-button--chosen breeds-info__sort-button--data"
            onClick={handleShowDataClick}
          >
            {showSort.sortData !== "" ? showSort.sortData : "------"}
          </button>
          {showSort.data && (
            <div className="breeds-info__sort-options">
              {dataOptions.map(
                (option) =>
                  option !== showSort.selectedDataButton && (
                    <button
                      key={option}
                      className="breeds-info__sort-button breeds-info__sort-button--data"
                      onClick={() => handleSortDataClick(option)}
                    >
                      {option}
                    </button>
                  )
              )}
            </div>
          )}
        </div>
        <div className="breeds-info__sort-small-container">
          <button
            className="breeds-info__sort-button breeds-info__sort-button--chosen breeds-info__sort-button--data"
            onClick={handleShowTypeClick}
          >
            {showSort.sortType !== "" ? showSort.sortType : "------"}
          </button>
          {showSort.type && (
            <div className="breeds-info__sort-options">
              {typeOptions.map(
                (option) =>
                  option !== showSort.selectedTypeButton && (
                    <button
                      key={option}
                      className="breeds-info__sort-button breeds-info__sort-button--toggle"
                      onClick={() => handleSortTypeClick(option)}
                    >
                      {option}
                    </button>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      <button
        className="breeds-info__reset-sort-button"
        onClick={handleResetClick}
      >
        Reset sorting
      </button>

      <div className="breeds-info__cat-info-grid">
      {sortedCatInfo.map((breed, index) => {
          return (
            <BreedInfoContainer
              key={breed.id}
              image={imagesContext(
                `./breed-${modifyBreedName(breed.name)}.jpg`
              )}
              catInfo={breed}
              isActive={index === activeIndex}
              handleClick={() => handleContainerClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BreedsInfoPage;
