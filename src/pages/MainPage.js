import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import OriginalWebsite from "../components/OriginalWebsite";
import ImageContainer from "../components/ImageContainer";
import Suggestions from "../components/Suggestions";
import Footer from "../components/Footer";
import Discover from "../components/Discover";
import { fetchCatImagesAsync, selectCatImages, setCatImagesDispatchedFirstTime, selectCatImagesDispatchedFirstTime } from "../store/slices/catImageSlice";
import { useDispatch, useSelector } from "react-redux";

function MainPage() {
  const [clickedButton, setClickedButton] = useState("");
  
  const dispatch = useDispatch()
  const catImages = useSelector(selectCatImages)
  const catImagesDispatchedFirstTime = useSelector(selectCatImagesDispatchedFirstTime);
  // Downloading images when component is rendered for the first time
  useEffect(() => {
    if (!catImagesDispatchedFirstTime) {
      dispatch(fetchCatImagesAsync());
      dispatch(setCatImagesDispatchedFirstTime(true));
    }
  }, [dispatch, catImagesDispatchedFirstTime]);

  // Changing displayed name of the breed depending on the clicked button
  const handleButtonClicked = (value) => {
    setClickedButton(value);
  };

  return (
    <div className="main">
      <h1 className="main__h1">Trending cat images</h1>
      <Suggestions onButtonClicked={handleButtonClicked} />
      <p className="main__limited-info">*Keep in mind that there may be a limited number of available photos for a given breed</p>
      <h2 className="main__h2">
        {clickedButton === "" ? "Random" : clickedButton}
      </h2>
      <main>
      {catImages.map((image, index) => (
          <ImageContainer key={index} image={image} />
        ))}
      </main>

        <div className="main__github">
          <a href="https://github.com/BZajc/CatHub">
            Check on GitHub: <AiFillGithub className="main__github-icon" />
          </a>
        </div>

      <Discover />
      <Footer />
      <OriginalWebsite />
    </div>
  );
}

export default MainPage;
