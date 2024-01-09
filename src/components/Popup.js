import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShowPopup, setShowPopup } from "../store/slices/uiSlice";

function Popup() {
  const dispatch = useDispatch();
  const popup = useSelector(selectShowPopup);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [letterOpacity, setLetterOpacity] = useState([]);

  const timeoutRef = useRef(null);

  // Handling displaying popup
  useEffect(() => {
    console.log(popup);

    // Stop timer if exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (popup.show) {
      setIsPopupVisible(true);

      const letters = popup.text.split("");
      setLetterOpacity(Array(letters.length).fill(0));

      timeoutRef.current = setTimeout(() => {
        setIsPopupVisible(false);
        dispatch(setShowPopup({ show: false, text: "" }));
      }, 2500);
    }
  }, [popup, dispatch]);

  // Handling popup text animation
  useEffect(() => {
    if (isPopupVisible) {
      const animationDuration = 1000;
      const interval = animationDuration / letterOpacity.length;

      for (let i = 0; i < letterOpacity.length; i++) {
        setTimeout(() => {
          setLetterOpacity((prevOpacity) =>
            prevOpacity.map((opacity, index) =>
              index === i ? 1 : opacity
            )
          );
        }, i * interval);
      }
    }
  }, [isPopupVisible, letterOpacity.length]);

  const handleClick = () => {
    setIsPopupVisible(false);
    dispatch(setShowPopup({ show: false, text: "" }));
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
