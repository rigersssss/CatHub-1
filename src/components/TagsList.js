import { FaPaw } from "react-icons/fa";

function TagsList() {
  const tags = [
    "cat",
    "cute",
    "funny",
    "kitten",
    "adorable",
    "meow",
    "fluffy",
    "pets",
    "feline",
    "whiskers",
  ];
  return (
    <ul className="navigation__sub-option-list">
      {tags.map((tag, index) => (
        <li key={index} className="navigation__sub-option-item">
          <button className="navigation__sub-option-button">
            <FaPaw /> #{tag}
          </button>
        </li>
      ))}
      <li className="navigation__sub-option-item">
        <button className="navigation__sub-option-button">
          All tags
        </button>
      </li>
    </ul>
  );
}

export default TagsList;
