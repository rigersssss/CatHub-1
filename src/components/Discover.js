import { FaCat } from "react-icons/fa";
import { AiOutlineSend, AiFillRead } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Discover() {
  const navigate = useNavigate();

  const handleShortiesClick = () => {
    navigate("shorties");
  };

  const handleBreedsInfoClick = () => {
    navigate("breedsinfo");
  };

  const handleTagsClick = () => {
    navigate("selection");
    setTimeout(() => {
      const selectionH3Tags = document.querySelector(".selection__h3--tags");
      selectionH3Tags.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleBreedsClick = () => {
    navigate("selection");
    setTimeout(() => {
      const selectionH3Breeds = document.querySelector(
        ".selection__h3--breeds"
      );
      selectionH3Breeds.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="discover">
      <p className="discover__tab">Discover</p>
      <div className="discover__container">
        <div className="discover__tiles-box">
          <div
            className="discover__tile discover__tile--shorties"
            onClick={handleShortiesClick}
          >
            <div className="discover__tile-background discover__tile-background--shorties"></div>
            <div className="discover__tile-dark-filter"></div>
            <AiOutlineSend className="discover__tile-topic" />
            <p className="discover__tile-topic">Shorties</p>
          </div>
          <div
            className="discover__tile discover__tile--breeds-info"
            onClick={handleBreedsInfoClick}
          >
            <div className="discover__tile-background discover__tile-background--breeds-info"></div>
            <div className="discover__tile-dark-filter"></div>
            <AiFillRead className="discover__tile-topic" />
            <p className="discover__tile-topic">Info about breeds</p>
          </div>
          <div
            className="discover__tile discover__tile--tags"
            onClick={handleTagsClick}
          >
            <div className="discover__tile-background discover__tile-background--tags"></div>
            <div className="discover__tile-dark-filter"></div>
            <p className="discover__tile-topic">#</p>
            <p className="discover__tile-topic">Tags List</p>
          </div>
          <div
            className="discover__tile discover__tile--breeds-list"
            onClick={handleBreedsClick}
          >
            <div className="discover__tile-background discover__tile-background--breeds-list"></div>
            <div className="discover__tile-dark-filter"></div>
            <FaCat className="discover__tile-topic" />
            <p className="discover__tile-topic">Breeds List</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
