import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCatImagesAsync,
  fetchCatImagesByTagsAsync,
  setUserSelectedBreed,
} from "../store/slices/catImageSlice";
import {
  setDisplayedBreedName,
  setActiveSuggestionButton,
} from "../store/slices/uiSlice";
import { useNavigate } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import scrollToImages from "../helpers/scroll"

function SearchInputResults({ searchResults, hideResults, handleClearInput }) {
  const [activeElementIndex, setActiveElementIndex] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFetchClick = (result) => {
    const { name, id, type } = result;

    const fetchFunction =
      type === "Breed" ? fetchCatImagesAsync : fetchCatImagesByTagsAsync;

    dispatch(fetchFunction(id)); // running fetch function depending on choose between tag and breed
    dispatch(setDisplayedBreedName(name)); // display fetched breed or tag name
    dispatch(setActiveSuggestionButton(name)); // set active button in Suggestions component
    dispatch(setUserSelectedBreed({ name, id })); // keep fetching the same id
    handleClearInput();
    hideResults();
    navigate("/");
    scrollToImages()
  };

  const handleShowMore = (index) => {
    // Check if element has active-search-element class
    const isActive = activeElementIndex === index;

    // If yes; remove it
    setActiveElementIndex(isActive ? null : index);
  };

  return (
    <div className="search__results">
      <ul className="search__results-list">
        {searchResults.map((result, index) => (
          <li
            key={index}
            className={`search__results-element ${
              activeElementIndex === index ? "active-search-element" : ""
            }`}
            onClick={() => handleShowMore(index)}
          >
            <p className="search__results-name">{result.name}</p>
            <p className="search__results-type">
              {result.type === "Breed" ? <FaPaw /> : "#"}
              {result.type}
            </p>
            <div className="search__results-menu">
              <button
                className="search__results-menu-button"
                onClick={() => handleFetchClick(result)}
              >
                Show images
              </button>
              <button className="search__results-menu-button">
                Learn more about {result.name}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchInputResults;
