import React from "react";
import { FaReddit, FaPinterest, FaBriefcaseMedical, FaExternalLinkAlt } from "react-icons/fa";

function CommunitiesList() {
  const communities = [
    { name: "reddit", link: "https://www.reddit.com/r/cats/", icon: FaReddit, type: "everything"},
    {
      name: "pinterest",
      link: "https://pl.pinterest.com/printmeme/cat-memes/",
      icon: FaPinterest,
      type: "memes"
    },
    {
        name: "Cat Health Center", link: "https://www.webmd.com/pets/cats/default.htm", icon: FaBriefcaseMedical, type: "health and care"
    }
  ];

  return (
    <div>
      <ul className="navigation__sub-option-list">
        {communities.map((community, index) => (
          <li key={index} className="navigation__sub-option-item">
            <p className="navigation__sub-option-target">({community.type})</p>
            <button className="navigation__sub-option-button">
              {/* Creates icon from react-icons library with its class */}
              {React.createElement(community.icon, {
                className: "navigation__sub-option-icon",
              })}
              <a href={community.link}>{community.name}</a>
              <FaExternalLinkAlt className="navigation__sub-option-icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommunitiesList;
