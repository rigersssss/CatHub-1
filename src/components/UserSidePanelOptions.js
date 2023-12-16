import {
  FaCloudUploadAlt,
  FaRegUserCircle,
  FaMarker,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
function UserSidePanelOptions() {

  return (
    <div className="user-side-panel__options">
      <div className="user-side-panel__general">
        <div className="user-side-panel__option">
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
