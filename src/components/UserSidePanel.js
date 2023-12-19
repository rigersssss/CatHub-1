import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import UserSidePanelOptions from "./UserSidePanelOptions";

function UserSidePanel({ showUserSidePanel, setShowUserSidePanel }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    setShowUserSidePanel(false);
  };

  const handleCloseClick = () => {
    setShowUserSidePanel(false);
  };

  return (
    <div
      className={`user-side-panel ${
        showUserSidePanel ? "" : "user-side-panel__active"
      }`}
    >
      <div className="user-side-panel__menu">
        <div className="user-side-panel__top">
          <div>
            <button onClick={handleLogoClick}>
              <img
                src={logo}
                alt="website logo"
                className="user-side-panel__logo"
              />
            </button>
          </div>
          <div>
            <button
              className="user-side-panel__close"
              onClick={handleCloseClick}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <div className="user-side-panel__bottom">
          <UserSidePanelOptions />
        </div>
      </div>
      <div
        className="user-side-panel__background"
        onClick={handleCloseClick}
      ></div>
    </div>
  );
}

export default UserSidePanel;
