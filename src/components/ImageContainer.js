import { AiFillHeart, AiFillDislike, AiFillLike } from "react-icons/ai";

function ImageContainer({imageUrl}) {
  return (
    <div className="image-container">
      <figure>
        <div>
          <img src={imageUrl} alt="cat" className="image-container__image" />
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
