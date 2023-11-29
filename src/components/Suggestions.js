import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatBreedsAsync,
  selectCatBreeds,
} from "../store/slices/catImageSlice";

function Suggestions() {
  const dispatch = useDispatch();
  const catBreeds = useSelector(selectCatBreeds);

  useEffect(() => {
    dispatch(fetchCatBreedsAsync());
  }, [dispatch]);

  useEffect(() => {
    console.log("Cat Breeds:", catBreeds);
  }, [catBreeds]);

  return (
    <div className="suggestions">
      <button className="suggestions__option">Random</button>
      <button className="suggestions__option">More...</button>
    </div>
  );
}

export default Suggestions;
