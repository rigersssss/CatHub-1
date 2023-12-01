import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatBreedsAsync,
  selectCatBreeds,
} from "../store/slices/catImageSlice";

function Suggestions({ onButtonClicked }) {
  const dispatch = useDispatch();
  const catBreeds = useSelector(selectCatBreeds);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [activeButton, setActiveButton] = useState("Random");

  useEffect(() => {
    dispatch(fetchCatBreedsAsync());
  }, [dispatch]);

  const logRandomBreeds = useCallback(() => {
    console.log("Cat Breeds:", catBreeds);
    if (catBreeds !== undefined && catBreeds.length > 0) {
      // Create copy of an array with breeds
      const breedsCopy = catBreeds.slice();
      // Choose randomly 5 breeds
      const shuffledBreeds = breedsCopy.sort(() => Math.random() - 0.5);
      // Create a new array with a randomly chosen breeds
      const newSelectedBreeds = shuffledBreeds.slice(0, 5);
      setSelectedBreeds(newSelectedBreeds);
      console.log("Selected Cat Breeds:", newSelectedBreeds);
    }
  }, [catBreeds]);

  
    const handleButtonClick = (value) => {
      onButtonClicked(value);
      setActiveButton(value);
    };

  useEffect(() => {
    logRandomBreeds();
  }, [logRandomBreeds]);

  return (
    <div className="suggestions">
      <button
        className={`suggestions__option ${
          activeButton === "Random" ? "active-suggestions-button" : ""
        }`}
        onClick={() => handleButtonClick("Random")}
      >
        Random
      </button>

      {/* Render 5 buttons based on 5 randomly chosen breeds */}
      {selectedBreeds.map((breed, index) => (
        <button
          key={index}
          className={`suggestions__option ${
            activeButton === breed ? "active-suggestions-button" : ""
          }`}
          onClick={() => handleButtonClick(breed)}
        >
          {breed}
        </button>
      ))}
      <button className="suggestions__option" onClick={logRandomBreeds}>
        More...
      </button>
    </div>
  );
}

export default Suggestions;
