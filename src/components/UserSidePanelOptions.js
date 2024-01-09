import { FaPaw, FaRegUserCircle, FaMarker } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
function UserSidePanelOptions() {
  return (
    <div className="user-side-panel__options">
      <div className="user-side-panel__general">

        <div className="user-side-panel__option user-side-panel__option--paw">
          <div className="user-side-panel__option-icon user-side-panel__option-icon--paw">
            <FaPaw />
          </div>
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
        <div className="user-side-panel__option">
          <div className="user-side-panel__option-icon">
            <IoSettings />
          </div>
          <div className="user-side-panel__option-text">
            <p>Panel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSidePanelOptions;
