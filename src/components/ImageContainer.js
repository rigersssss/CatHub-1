import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatImageAsync, selectCatImageUrl, selectCatStatus } from "../store/slices/catImageSlice";
import { AiFillHeart, AiFillDislike, AiFillLike } from "react-icons/ai";
// import test from "../images/test-cat.jpg";

function ImageContainer() {
  const dispatch = useDispatch()
  const catImageUrl = useSelector(selectCatImageUrl)
  const catStatus = useSelector(selectCatStatus)

  useEffect(() => {
    if (catStatus === 'idle') {
      dispatch(fetchCatImageAsync())
    }
  }, [catStatus, dispatch])

  return (
    <div className="image-container">
      <figure>
        <div>
          <img src={catImageUrl} alt="cat" className="image-container__image" />
        </div>
        <div className="image-container__info">
          <p>Views</p>
          <div className="image-container__rating">
            <AiFillLike className="image-container__like"/>
            <AiFillDislike className="image-container__dislike"/>
            <p>Rating</p>
          </div>
        </div>
        <div className="image-container__favorite">
          <p className="image-container__favorite-text">
            Add this image to your favorites
          </p>
          <AiFillHeart className="image-container__heart-icon" />
        </div>
      </figure>
    </div>
  );
}

export default ImageContainer;
