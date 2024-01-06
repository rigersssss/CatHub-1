import {
  FaRegQuestionCircle,
  FaRegHeart,
  FaRegUserCircle,
  FaBrain,
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import BreedInfoContainer from "../components/BreedInfoContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectCatBreeds,
  fetchCatBreedsAsync,
} from "../store/slices/catImageSlice";

// Get all breed images
const imagesContext = require.context("../images/cats/", false, /\.(jpg)$/);

function BreedsInfoPage() {
  const catInfo = useSelector(selectCatBreeds);
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (catInfo.length === 0) {
      dispatch(fetchCatBreedsAsync());
    }
  }, [dispatch, catInfo]);

  // Ignore s p a c e s, CAPITAL LETTERS and-dashes
  const modifyBreedName = (name) =>
    name.toLowerCase().replace(/\s/g, "").replace(/-/g, "");

  const handleContainerClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const breedsArray = [
    { name: "Abyssinian", id: "abys" },
    { name: "Aegean", id: "aege" },
    { name: "American Bobtail", id: "abob" },
    { name: "American Curl", id: "acur" },
    { name: "American Shorthair", id: "asho" },
    { name: "American Wirehair", id: "awir" },
    { name: "Arabian Mau", id: "amau" },
    { name: "Australian Mist", id: "amis" },
    { name: "Balinese", id: "bali" },
    { name: "Bambino", id: "bamb" },
    { name: "Bengal", id: "beng" },
    { name: "Birman", id: "birm" },
    { name: "Bombay", id: "bomb" },
    { name: "British Longhair", id: "bslo" },
    { name: "British Shorthair", id: "bsho" },
    { name: "Burmese", id: "bure" },
    { name: "Burmilla", id: "buri" },
    { name: "California Spangled", id: "cspa" },
    { name: "Chantilly-Tiffany", id: "ctif" },
    { name: "Chartreux", id: "char" },
    { name: "Chausie", id: "chau" },
    { name: "Cheetoh", id: "chee" },
    { name: "Colorpoint Shorthair", id: "csho" },
    { name: "Cornish Rex", id: "crex" },
    { name: "Cymric", id: "cymr" },
    { name: "Cyprus", id: "cypr" },
    { name: "Devon Rex", id: "drex" },
    { name: "Donskoy", id: "dons" },
    { name: "Dragon Li", id: "lihu" },
    { name: "Egyptian Mau", id: "emau" },
    { name: "European Burmese", id: "ebur" },
    { name: "Exotic Shorthair", id: "esho" },
    { name: "Havana Brown", id: "hbro" },
    { name: "Himalayan", id: "hima" },
    { name: "Japanese Bobtail", id: "jbob" },
    { name: "Javanese", id: "java" },
    { name: "Khao Manee", id: "khao" },
    { name: "Korat", id: "kora" },
    { name: "Kurilian", id: "kuri" },
    { name: "LaPerm", id: "lape" },
    { name: "Maine Coon", id: "mcoo" },
    { name: "Malayan", id: "mala" },
    { name: "Manx", id: "manx" },
    { name: "Munchkin", id: "munc" },
    { name: "Nebelung", id: "nebe" },
    { name: "Norwegian Forest Cat", id: "norw" },
    { name: "Ocicat", id: "ocic" },
    { name: "Oriental", id: "orie" },
    { name: "Persian", id: "pers" },
    { name: "Pixie-bob", id: "pixi" },
    { name: "Ragamuffin", id: "raga" },
    { name: "Ragdoll", id: "ragd" },
    { name: "Russian Blue", id: "rblu" },
    { name: "Savannah", id: "sava" },
    { name: "Scottish Fold", id: "sfol" },
    { name: "Selkirk Rex", id: "srex" },
    { name: "Siamese", id: "siam" },
    { name: "Siberian", id: "sibe" },
    { name: "Singapura", id: "sing" },
    { name: "Snowshoe", id: "snow" },
    { name: "Somali", id: "soma" },
    { name: "Sphynx", id: "sphy" },
    { name: "Tonkinese", id: "tonk" },
    { name: "Toyger", id: "toyg" },
    { name: "Turkish Angora", id: "tang" },
    { name: "Turkish Van", id: "tvan" },
    { name: "York Chocolate", id: "ycho" },
  ];

  return (
    <div className="breeds-info">
      <header className="breeds-info__header">
        <div className="breeds-info__header-image">
          <div className="breeds-info__header-image-filter">
            <h1 className="breeds-info__header-text breeds-info__h1">
              Welcome to the section where you can learn more about interesting
              breeds!
            </h1>
            <div className="breeds-info__header-split-containers">
              <div className="breeds-info__header-split-container breeds-info__header-split-container--1">
                <FaRegQuestionCircle className="breeds-info__header-text breeds-info__header-text--icon" />
                <p className="breeds-info__header-text breeds-info__header-text--how">
                  How it works?
                </p>
              </div>
              <div className="breeds-info__header-split-container breeds-info__header-split-container--2">
                <p className="breeds-info__header-text">
                  It's very simple, choose one of the many available breeds (67
                  to be precise), and after clicking, you will learn about
                  things such as:
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="breeds-info__below-header-container">
        <ul className="breeds-info__below-header-ol">
          <li className="breeds-info__below-header-li">
            <FaRegHeart className="breeds-info__li-icon" />
            Average lifespan
          </li>
          <li className="breeds-info__below-header-li">
            <FiActivity className="breeds-info__li-icon" />
            Physical activity
          </li>
          <li className="breeds-info__below-header-li">
            <FaRegUserCircle className="breeds-info__li-icon" />
            Attitude towards strangers
          </li>
          <li className="breeds-info__below-header-li">
            <FaBrain className="breeds-info__li-icon" />
            Various interesting facts and much more!
          </li>
        </ul>
        <p className="breeds-info__below-header-info">
          In addition to the above, you will find links to more detailed sources
          of information!
        </p>
        <p className="breeds-info__below-header-info breeds-info__below-header-info--orange">
          *If you want to search for a specific breed, you can
          always use the <AiOutlineSearch className="breeds-info__glass-icon" />{" "}
          icon in the top right corner
        </p>
      </div>
      <div className="breeds-info__header-divider"></div>

      <div className="breeds-info__cat-info-grid">
      {catInfo.length > 0 &&
          breedsArray.map((breed, index) => {
            // Find matching object in catInfo array
            const matchingBreed = catInfo.find((cat) => cat.name === breed.name);

            return (
              <BreedInfoContainer
                key={breed.id}
                image={imagesContext(
                  `./breed-${modifyBreedName(breed.name)}.jpg`
                )}
                catInfo={matchingBreed}
                isActive={index === activeIndex}
                handleClick={() => handleContainerClick(index)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default BreedsInfoPage;
