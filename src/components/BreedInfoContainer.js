import divider from "../images/divider.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
function BreedInfoContainer({ image, catInfo, isActive, handleClick }) {
  const {
    id,
    name,
    description,
    temperament,
    lifespan,
    weight,
    energy,
    health,
    intelligence,
    shedding,
    social,
    stranger,
    more,
  } = catInfo;

  const handleBtnClick = () => {
    if (handleClick) {
      handleClick();
    }
    if (catInfo) {
      console.log(catInfo.id);

      const element = document.getElementById(catInfo.id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
    }
  };

  const removeQuotes = (input) => {
    if (typeof input === "string" || input instanceof String) {
      return input.replace(/"/g, "");
    }
    return input;
  };

  const renderTraitIcons = (traitValue) => {
    const fullHearts = traitValue;
    const emptyHearts = 5 - traitValue;

    const heartIcons = [];

    for (let i = 0; i < fullHearts; i++) {
      heartIcons.push(<FaHeart key={i} className="breeds-info__heart-icon" />);
    }

    for (let i = 0; i < emptyHearts; i++) {
      heartIcons.push(<FaRegHeart key={i + fullHearts} className="breeds-info__heart-icon" />);
    }

    return heartIcons;
  };


  return (
    <div
      className={`breeds-info__cat-container-wrapper ${
        isActive ? "info-active" : ""
      }`}
    >
      <div id={id} className={`breeds-info__cat-container`}>
        <button
          className="breeds-info__cat-button"
          style={{
            backgroundImage: `url(${image})`,
          }}
          onClick={handleBtnClick}
        >
          <div className="breeds-info__cat-button-background">
            <p className="breeds-info__cat-button-name">{name}</p>
          </div>
        </button>
      </div>
      <div className={`breeds-info__cat-info-box`}>
        <p className="breeds-info__cat-text breeds-info__cat-text--name">
          {name}
        </p>
        <p className="breeds-info__cat-text breeds-info__cat-text--temperament">
          {temperament}
        </p>
        <p className="breeds-info__cat-section-text">About me</p>
        <p className="breeds-info__cat-text breeds-info__cat-text--description">
          {description}
        </p>
        <p className="breeds-info__cat-section-text">Basic informations</p>
        <div className="breeds-info__cat-basic-info">
          <p className="breeds-info__cat-text breeds-info__cat-text--lifespan">
            lifespan: {removeQuotes(JSON.stringify(lifespan))} years
          </p>
          <p className="breeds-info__cat-text breeds-info__cat-text--weight">
            weight: {removeQuotes(JSON.stringify(weight.metric))} kg
          </p>
        </div>
        <p className="breeds-info__cat-section-text">Traits</p>
        <div className="breeds-info__cat-traits-info-box">
          <div className="breeds-info__cat-trait">
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-name">
              Health
            </p>
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-amount">
              {renderTraitIcons(health)}
            </p>
          </div>
          <div className="breeds-info__cat-trait">
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-name">
              Energy
            </p>
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-amount">
              {renderTraitIcons(energy)}
            </p>
          </div>
          <div className="breeds-info__cat-trait">
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-name">
              Intelligence
            </p>
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-amount">
              {renderTraitIcons(intelligence)}
            </p>
          </div>
          <div className="breeds-info__cat-trait">
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-name">
              Social
            </p>
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-amount">
              {renderTraitIcons(social)}
            </p>
          </div>
          <div className="breeds-info__cat-trait">
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-name">
              Friendly
            </p>
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-amount">
              {renderTraitIcons(stranger)}
            </p>
          </div>
          <div className="breeds-info__cat-trait">
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-name">
              Shedding
            </p>
            <p className="breeds-info__cat-text breeds-info__cat-text--trait-amount">
              {renderTraitIcons(shedding)}
            </p>
          </div>
        </div>
        <p className="breeds-info__cat-text breeds-info__cat-text--more">If you would like to learn more about your favorite breed, please visit the link below</p>
        <a href={more} className="breeds-info__cat-text breeds-info__cat-text--link">Read more</a>
        <div className="breeds-info__divider-box">
          <img src={divider} alt="decorative ornament" />
        </div>
      </div>
    </div>
  );
}

export default BreedInfoContainer;
