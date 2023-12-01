import { AiOutlineClose } from "react-icons/ai";
import { GiPokerHand } from "react-icons/gi";

function Catsino({ setShowCatsino }) {
  const handleCloseClick = () => {
    setShowCatsino(false);
  };

  return (
    <div className="catsino">
      <div className="catsino__wrapper">
        <div className="catsino__container">
          <div className="catsino__container-background"></div>
          <div className="catsino__container-text">
            <button className="catsino__close-btn">
              <AiOutlineClose
                className="catsino__close-icon"
                onClick={handleCloseClick}
              />
            </button>
            <h3 className="catsino__h3">Catsino:</h3>
            <p className="catsino__text">
              <span className="catsino__orange-text">Catsino</span> is currently
              closed for maintenance. It will be available again on Meowcember
              32nd. We apologize for any inconvenience.
            </p>
            <GiPokerHand className="catsino__poker-icon" />
          </div>
        </div>
      </div>
      <div className="catsino__background" onClick={handleCloseClick}></div>
    </div>
  );
}

export default Catsino;
