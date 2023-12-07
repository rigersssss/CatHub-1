import { FaPaw } from "react-icons/fa";

function BreedsList() {
  const breed = [
    "Maine Coon",
    "Persian",
    "Siamese",
    "Bengal",
    "Ragdoll",
    "Sphynx",
    "Scottish Fold",
    "Abyssinian",
    "Burmese",
    "Russian Blue",
  ];
  return (
    <ul className="navigation__sub-option-list">
      {breed.map((breed, index) => (
        <li key={index} className="navigation__sub-option-item">
          <button className="navigation__sub-option-button">
            <FaPaw /> {breed}
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
