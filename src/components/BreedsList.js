import { FaPaw } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchCatImagesAsync, setUserSelectedBreed } from "../store/slices/catImageSlice";
import { setShowNav } from "../store/slices/uiSlice";
import { useNavigate } from "react-router-dom";
import { setDisplayedBreedName, setActiveSuggestionButton } from "../store/slices/uiSlice";
import scrollToImages from "../helpers/scroll";

function BreedsList({handleFullListClick}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const breeds = [
    { name: "Maine Coon", id: "mcoo" },
    { name: "Persian", id: "pers" },
    { name: "Siamese", id: "siam" },
    { name: "Bengal", id: "beng" },
    { name: "Ragdoll", id: "ragd" },
    { name: "Sphynx", id: "sphy" },
    { name: "Scottish Fold", id: "sfol" },
    { name: "Abyssinian", id: "abys" },
    { name: "Burmese", id: "bure" },
    { name: "Russian Blue", id: "rblu" },
  ];


  const handleClick = (breed) => {
    navigate("/");
    dispatch(setUserSelectedBreed(breed))
    dispatch(fetchCatImagesAsync(breed.id));
    dispatch(setDisplayedBreedName(breed.name))
    dispatch(setShowNav(false))
    dispatch(setActiveSuggestionButton(breed.name))
    scrollToImages()
  };

  return (
    <ul className="navigation__sub-option-list">
      {breeds.map((breed, index) => (
        <li key={index} className="navigation__sub-option-item">
          <button className="navigation__sub-option-button" onClick={() => handleClick(breed)}>
            <FaPaw /> {breed.name}
          </button>
        </li>
      ))}
      <li className="navigation__sub-option-item">
        <button className="navigation__sub-option-button" onClick={() => handleFullListClick("breeds")}>
          All breeds
        </button>
      </li>
    </ul>
  );
}

export default BreedsList;
