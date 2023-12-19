import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import StarRating from "react-rating-stars-component";

function ImageContainer({ image }) {
  const [showPopup, setShowPopup] = useState(false);
  const [randomViews, setRandomViews] = useState(0);
  const [favoriteClicked, setFavoriteClicked] = useState(false);
  const [randomUser, setRandomUser] = useState("");

  const randomRating = (Math.floor(Math.random() * 4) + 7) / 2;

  const handleFavoriteClick = () => {
    setFavoriteClicked(!favoriteClicked);
  };

  // Show popup on rating stars while clicked
  const handleRatingClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  // Generate random nickname for a username
  useEffect(() => {
    const generateRandomUsername = faker.internet.userName;
    setRandomUser(generateRandomUsername());
  }, []);

  // Prevents to re-generate views after every interaction with rating stars
  useEffect(() => {
    const views = Math.floor(Math.random() * (500000 - 300 + 1)) + 300;
    setRandomViews(views);
  }, []);

  return (
    <div className="image-container">
      <figure>
        <div>
          <img src={image} alt="cat" className="image-container__image" />
        </div>
        <div className="image-container__info">
          <div className="image-container__info-wrapper">
            <p className="image-container__info-views">{randomViews}</p>
            <GrView />
          </div>
          <div className="image-container__rating" onClick={handleRatingClick}>
            <div
              className={`image-container__popup ${
                showPopup ? "rating-show-popup" : ""
              }`}
            >
              <p>Rated!</p>
            </div>
            <StarRating
              count={5}
              size={32}
              activeColor="#ff9000"
              isHalf={true}
              value={randomRating}
            />
          </div>
        </div>
        <div className="image-container__favorite">
          <p className="image-container__favorite-text">
            Add this image to your favorites
          </p>
          <AiFillHeart
            className={`image-container__heart-icon ${
              favoriteClicked ? "favorite-clicked" : ""
            }`}
            onClick={handleFavoriteClick}
          />
        </div>
        <p className="image-container__username">@{randomUser}</p>
      </figure>
    </div>
  );
}

export default ImageContainer;
