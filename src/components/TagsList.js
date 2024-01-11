import { FaPaw } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchCatImagesByTagsAsync } from "../store/slices/catImageSlice";
import { setShowNav, setActiveSuggestionButton, setDisplayedBreedName } from "../store/slices/uiSlice";
import scrollToImages from "../helpers/scroll";

function TagsList({handleFullListClick}) {
  const dispatch = useDispatch()

  const handleClick = (tag) => {
    dispatch(setDisplayedBreedName(tag))
    dispatch(fetchCatImagesByTagsAsync(tag))
    dispatch(setShowNav(false))
    setActiveSuggestionButton(tag)
    scrollToImages()
  }

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
          <button className="navigation__sub-option-button" onClick={() => handleClick(tag)}>
            <FaPaw /> #{tag}
          </button>
        </li>
      ))}
      <li className="navigation__sub-option-item">
        <button className="navigation__sub-option-button" onClick={() => handleFullListClick()}>
          All tags
        </button>
      </li>
    </ul>
  );
}

export default TagsList;
