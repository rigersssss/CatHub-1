import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShowPopup, setShowPopup } from "../store/slices/uiSlice";

function Popup() {
  const dispatch = useDispatch();
  const popup = useSelector(selectShowPopup);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [letterOpacity, setLetterOpacity] = useState([]);
  const animationRef = useRef(null);
  const hideTimerRef = useRef(null);

  // Handling displaying popup
  useEffect(() => {
    // Stop animation if it's running
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    if (popup.show) {
      setIsPopupVisible(true);

      const letters = popup.text.split("");
      setLetterOpacity(Array(letters.length).fill(0));

      const animationDuration = 1000;
      const interval = animationDuration / letterOpacity.length;

      animationRef.current = setInterval(() => {
        setLetterOpacity((prevOpacity) =>
          prevOpacity.map((opacity, index) =>
            index === 0 ? 1 : prevOpacity[index - 1]
          )
        );
      }, interval);

      // Clear the previous timer if it exists
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      // Set a timer for hiding the popup
      hideTimerRef.current = setTimeout(() => {
        setIsPopupVisible(false);
        dispatch(setShowPopup({ show: false, text: "" }));
        clearInterval(animationRef.current);
      }, 2500);
    }
  }, [popup, dispatch, letterOpacity.length]);

  const handleClick = () => {
    setIsPopupVisible(false);
    dispatch(setShowPopup({ show: false, text: "" }));
    // Clear the timer on click
    clearTimeout(hideTimerRef.current);
  };

  return (
    <div
      className={`popup ${isPopupVisible ? "popup-show" : ""}`}
      onClick={handleClick}
    >
      <div className="popup__text-box">
        <p className="popup__text">
          {popup.text.split("").map((letter, index) => (
            <span key={index} style={{ opacity: letterOpacity[index] }}>
              {letter}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Popup;
