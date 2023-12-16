import React, { useState, useEffect } from "react";
import {
  FaCloudUploadAlt,
  FaRegUserCircle,
  FaMarker,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

function UserSidePanelOptions() {
  // most useless functionality ever starts here
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [color, setColor] = useState("blue");
  const [fontSize, setFontSize] = useState("1rem");

  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * 80);
    const left = Math.floor(Math.random() * 80);
    setPosition({ top, left });
  };

  const getRandomColor = () => {
    const colors = ["blue", "green", "red", "yellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  const getRandomFontSize = () => {
    const minFontSize = 1;
    const maxFontSize = 5;
    const randomFontSize =
      Math.random() * (maxFontSize - minFontSize) + minFontSize;
    setFontSize(`${randomFontSize}rem`);
  };

  const handlePawClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    getRandomPosition();
    getRandomColor();
    getRandomFontSize();
  };

  useEffect(() => {
    let timeout;
    if (clickCount > 0) {
      timeout = setTimeout(() => {
        setClickCount(0);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [clickCount]);
  // most useless functionality ever ends here

  return (
    <div className="user-side-panel__options">
      <div className="user-side-panel__general">
        <div className="user-side-panel__option" onClick={handlePawClick}>
          <a
            href="https://cataas.com/upload"
            className="user-side-panel__option-link"
          >
            <div className="user-side-panel__option-icon">
              <FaCloudUploadAlt />
            </div>
            <div className="user-side-panel__option-text">
              Upload <FaExternalLinkAlt />
            </div>
          </a>
        </div>
        <div className="user-side-panel__option">
          <div className="user-side-panel__option-icon">
            <FaRegUserCircle />
          </div>
          <div className="user-side-panel__option-text">
            <p>Log In</p>
          </div>
        </div>
        <div className="user-side-panel__option">
          <div className="user-side-panel__option-icon">
            <FaMarker />
          </div>
          <div className="user-side-panel__option-text">
            <p>Sign Up</p>
          </div>
        </div>
        <div
          className="user-side-panel__option user-side-panel__option--paw"
          onClick={handlePawClick}
        >
          <div
            className="user-side-panel__option-icon"
            style={{ position: "relative" }}
          >
            <FaPaw className="user-side-panel__paw" />
            {clickCount > 0 && (
              <div
                className="click-count"
                style={{
                  position: "absolute",
                  top: `${position.top}%`,
                  left: `${position.left}%`,
                  color,
                  fontSize,
                  userSelect: "none", // Prevent user selection
                }}
              >
                {clickCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSidePanelOptions;
