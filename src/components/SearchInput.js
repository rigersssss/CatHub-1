import { useState, useEffect, useRef } from "react";
import SearchInputResults from "./SearchInputResults";

function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  const inputRef = useRef(null);

  const tagsArray = [
    "adorable",
    "black",
    "cat",
    "christmascat",
    "curious",
    "cute",
    "feline",
    "fluffy",
    "funny",
    "grumpy",
    "happy",
    "kitten",
    "pets",
    "relaxed",
    "sleepy",
    "silly",
    "whiskers",
    "white",
  ];

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

  useEffect(() => {
    // Hide results if user clicks outside the input
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);

    // Filter tags
    const filteredTags = tagsArray.filter((tag) =>
      tag.toLowerCase().includes(inputText.toLowerCase())
    );

    // Filter breeds
    const filteredBreeds = breedsArray.filter((breed) =>
      breed.name.toLowerCase().includes(inputText.toLowerCase())
    );

    // Formatting data to the correct one
    const newSearchResults = [
      ...filteredBreeds.map((breed) => ({ id: breed.id, name: breed.name, type: "Breed" })),
      ...filteredTags.map((tag) => ({ id: tag, name: tag, type: "Tag" })),
    ];

    setSearchResults(newSearchResults);
    setShowResults(inputText.length > 0 || newSearchResults.length > 0);
  };

  const handleInputClick = () => {
    if (searchText.length === 0) {
      // If input is empty display all breeds and tags
      const allResults = [
        ...breedsArray.map((breed) => ({ id: breed.id, name: breed.name, type: "Breed" })),
        ...tagsArray.map((tag) => ({ id: tag, name: tag, type: "Tag" })),
      ];
      setSearchResults(allResults);
      setShowResults(true);
    } else {
      setShowResults(true);
    }
  };

  const handleResultsHide = () => {
    setShowResults(false);
  };

  const handleClearInput = () => {
    setSearchText("");
  };

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__input-and-results" ref={inputRef}>
          <input
            className="search__input"
            placeholder="Search for breed or tag"
            value={searchText}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
          {showResults && <SearchInputResults searchResults={searchResults} hideResults={handleResultsHide} handleClearInput={handleClearInput}/>}
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
