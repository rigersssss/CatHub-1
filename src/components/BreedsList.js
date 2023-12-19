import { FaPaw } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchCatImagesAsync } from "../store/slices/catImageSlice";
function BreedsList() {
  const dispatch = useDispatch()
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

  const handleClick = (id) => {
    dispatch(fetchCatImagesAsync(id));
  };

  return (
    <ul className="navigation__sub-option-list">
      {breeds.map((breed, index) => (
        <li key={index} className="navigation__sub-option-item">
          <button className="navigation__sub-option-button" onClick={() => handleClick(breed.id)}>
            <FaPaw /> {breed.name}
          </button>
        </li>
      ))}
      <li className="navigation__sub-option-item">
        <button className="navigation__sub-option-button">
          All breeds
        </button>
      </li>
    </ul>
  );
}

export default BreedsList;
