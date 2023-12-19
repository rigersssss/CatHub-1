import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatBreedsAsync,
  fetchCatImagesAsync,
  selectCatBreeds,
  setUserSelectedBreed,
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

  useEffect(() => {
    logRandomBreeds();
  }, [logRandomBreeds]);

  const handleButtonClick = (breed) => {
    const breedObject = breed === "Random" ? { name: "Random", id: "Random" } : breed;
    dispatch(setUserSelectedBreed(breedObject));
    onButtonClicked(breedObject.name);
    setActiveButton(breedObject.name);
    dispatch(fetchCatImagesAsync(breedObject.id))
  };

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
            activeButton === breed.name ? "active-suggestions-button" : ""
          }`}
          onClick={() => handleButtonClick(breed)}
        >
          {breed.name}
        </button>
      ))}
      <button className="suggestions__option">
        More...
      </button>
    </div>
  );
}

export default Suggestions;
