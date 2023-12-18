import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillGithub } from "react-icons/ai";
import {
  fetchCatImagesAsync,
  selectCatImageUrls,
  selectCatStatus,
  selectUserSelectedBreed,
} from "../store/slices/catImageSlice";
import OriginalWebsite from "../components/OriginalWebsite";
import ImageContainer from "../components/ImageContainer";
import Suggestions from "../components/Suggestions";
import Footer from "../components/Footer";
import Discover from "../components/Discover";

function MainPage() {
  const dispatch = useDispatch();

  const imageUrls = useSelector(selectCatImageUrls);
  const status = useSelector(selectCatStatus);
  const userSelectedBreed = useSelector(selectUserSelectedBreed);

  const [clickedButton, setClickedButton] = useState("");

  const handleButtonClicked = (value) => {
    setClickedButton(value);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCatImagesAsync());
    }
    console.log(clickedButton);
  }, [status, dispatch, userSelectedBreed, clickedButton]);

  return (
    <div className="main">
      <h1 className="main__h1">Trending cat images</h1>
      <Suggestions onButtonClicked={handleButtonClicked} />
      <h2 className="main__h2">
        {clickedButton === "" ? "Random" : clickedButton}
      </h2>
      <main>
        {imageUrls.map((url, index) => (
          <ImageContainer key={index} imageUrl={url.url} />
        ))}
      </main>
      {imageUrls.length > 0 && (
        <div className="main__github">
          <a href="https://github.com/BZajc/CatHub">
            Check on GitHub: <AiFillGithub className="main__github-icon" />
          </a>
        </div>
      )}
      <Discover />
      <Footer />
      <OriginalWebsite />
    </div>
  );
}

export default MainPage;
