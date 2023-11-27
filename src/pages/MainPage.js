import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatImagesAsync,
  selectCatImageUrls,
  selectCatStatus,
} from "../store/slices/catImageSlice";
import OriginalWebsite from "../components/OriginalWebsite";
import Header from "../components/Header";
import ImageContainer from "../components/ImageContainer";

function MainPage() {
  const dispatch = useDispatch();
  const imageUrls = useSelector(selectCatImageUrls);
  const status = useSelector(selectCatStatus);

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
      <main>
        {imageUrls.map((url, index) => (
          <ImageContainer key={index} imageUrl={url.url} />
        ))}
      </main>
      <OriginalWebsite />
    </div>
  );
}

export default MainPage;
