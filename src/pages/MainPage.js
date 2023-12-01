import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillGithub
} from "react-icons/ai";
import {
  fetchCatImagesAsync,
  selectCatImageUrls,
  selectCatStatus,
} from "../store/slices/catImageSlice";
import OriginalWebsite from "../components/OriginalWebsite";
import Header from "../components/Header";
import ImageContainer from "../components/ImageContainer";
import Suggestions from "../components/Suggestions";
function MainPage() {
  const dispatch = useDispatch();
  const imageUrls = useSelector(selectCatImageUrls);
  const status = useSelector(selectCatStatus);
  const [clickedButton, setClickedButton] = useState("");

  const handleButtonClicked = (value) => {
    setClickedButton(value);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCatImagesAsync());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      console.log("Cat Image URLs:", imageUrls);
    }
  }, [status, imageUrls]);

  return (
    <div className="main">
      <Header />
      <h1 className="main__h1">Trending cat images</h1>
      <Suggestions onButtonClicked={handleButtonClicked} />
      <h2 className="main__h2">{clickedButton !== "" ? clickedButton : "Random"}</h2>
      <main>
        {imageUrls.map((url, index) => (
          <ImageContainer key={index} imageUrl={url.url} />
        ))}
      </main>
      {imageUrls.length > 0 && (
      <div className="main__github">
        Check on GitHub: <a href="https://github.com/BZajc/CatHub"><AiFillGithub className="main__github-icon"/></a>
      </div>
    )}
      <OriginalWebsite />
    </div>
  );
}

export default MainPage;
