// Get all tag images
// const imagesContext = require.context("../images/cats/", false, /\.(jpg)$/);

import AbyssinianImage from "../images/cats/breed-abyssinian.jpg";

function BreedInfoContainer() {

  return (
    <div className="breeds-info__cat-container">
      <button
        className="breeds-info__cat-button"
        style={{
          backgroundImage: `url(${AbyssinianImage})`,
        }}
      >
        <div className="breeds-info__cat-button-background">
            <p className="breeds-info__cat-button-name">Abyssinian</p>
        </div>
      </button>
    </div>
  );
}

export default BreedInfoContainer;
