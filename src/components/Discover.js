import { FaCat } from "react-icons/fa";
import { AiFillCamera, AiFillVideoCamera } from "react-icons/ai";

function Discover() {
  return (
    <div className="discover">
        <p className="discover__tab">Discover</p>
      <div className="discover__container">
        <div className="discover__tiles-box">
          <div className="discover__tile discover__tile--gifs">
            <div className="discover__tile-background discover__tile-background--gifs"></div>
            <div className="discover__tile-dark-filter"></div>
            <AiFillVideoCamera  className="discover__tile-topic"/>
            <p className="discover__tile-topic">Videos</p>
          </div>
          <div className="discover__tile discover__tile--breeds">
            <div className="discover__tile-background discover__tile-background--breeds"></div>
            <div className="discover__tile-dark-filter"></div>
            <FaCat  className="discover__tile-topic"/>
            <p className="discover__tile-topic">Breeds</p>
          </div>
          <div className="discover__tile discover__tile--tags">
            <div className="discover__tile-background discover__tile-background--tags"></div>
            <div className="discover__tile-dark-filter"></div>
            <p className="discover__tile-topic">#</p>
            <p className="discover__tile-topic">Tags</p>
          </div>
          <div className="discover__tile discover__tile--images">
            <div className="discover__tile-background discover__tile-background--images"></div>
            <div className="discover__tile-dark-filter"></div>
            <AiFillCamera  className="discover__tile-topic"/>
            <p className="discover__tile-topic">Images</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
