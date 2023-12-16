import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png";
import NavigationOptions from "./NavigationOptions";
import { useNavigate } from "react-router-dom";

function MobileNavigation({ setShowNav, showNav }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    setShowNav(false);
  };

  const handleCloseClick = () => {
    setShowNav(false);
  };

  return (
    <div className={`navigation ${showNav ? "" : "navigation__active"}`}>
      <div className="navigation__side-menu">
        <div className="navigation__top">
          <div>
            <button onClick={handleLogoClick}>
              <img src={logo} alt="website logo" className="navigation__logo" />
            </button>
          </div>
          <div>
            <button className="navigation__close" onClick={handleCloseClick}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <div className="navigation__bottom">
          <NavigationOptions />
        </div>
      </div>
      <div className="navigation__background" onClick={handleCloseClick}></div>
    </div>
  );
}

export default MobileNavigation;
