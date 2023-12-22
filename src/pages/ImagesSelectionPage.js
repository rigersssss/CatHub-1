import {
  AiOutlineSearch,
} from "react-icons/ai";

// Get all tag images
const imagesContext = require.context("../images/cats/", false, /\.(jpg)$/);

function ImagesSelectionPage() {
  const tagsArray = [
    "cat",
    "cute",
    "funny",
    "kitten",
    "adorable",
    "fluffy",
    "pets",
    "feline",
    "whiskers",
    "christmascat",
    "grumpy",
    "sleepy",
    "relaxed",
    "curious",
    "black",
    "white",
    "silly",
    "happy",
  ];

  // const breedsArray = [
  //   { name: "Abyssinian", id: "abys" },
  //   { name: "Aegean", id: "aege" },
  //   { name: "American Bobtail", id: "abob" },
  //   { name: "American Curl", id: "acur" },
  //   { name: "American Shorthair", id: "asho" },
  //   { name: "American Wirehair", id: "awir" },
  //   { name: "Arabian Mau", id: "amau" },
  //   { name: "Australian Mist", id: "amis" },
  //   { name: "Balinese", id: "bali" },
  //   { name: "Bambino", id: "bamb" },
  //   { name: "Bengal", id: "beng" },
  //   { name: "Birman", id: "birm" },
  //   { name: "Bombay", id: "bomb" },
  //   { name: "British Longhair", id: "bslo" },
  //   { name: "British Shorthair", id: "bsho" },
  //   { name: "Burmese", id: "bure" },
  //   { name: "Burmilla", id: "buri" },
  //   { name: "California Spangled", id: "cspa" },
  //   { name: "Chantilly-Tiffany", id: "ctif" },
  //   { name: "Chartreux", id: "char" },
  //   { name: "Chausie", id: "chau" },
  //   { name: "Cheetoh", id: "chee" },
  //   { name: "Colorpoint Shorthair", id: "csho" },
  //   { name: "Cornish Rex", id: "crex" },
  //   { name: "Cymric", id: "cymr" },
  //   { name: "Cyprus", id: "cypr" },
  //   { name: "Devon Rex", id: "drex" },
  //   { name: "Donskoy", id: "dons" },
  //   { name: "Dragon Li", id: "lihu" },
  //   { name: "Egyptian Mau", id: "emau" },
  //   { name: "European Burmese", id: "ebur" },
  //   { name: "Exotic Shorthair", id: "esho" },
  //   { name: "Havana Brown", id: "hbro" },
  //   { name: "Himalayan", id: "hima" },
  //   { name: "Japanese Bobtail", id: "jbob" },
  //   { name: "Javanese", id: "java" },
  //   { name: "Khao Manee", id: "khao" },
  //   { name: "Korat", id: "kora" },
  //   { name: "Kurilian", id: "kuri" },
  //   { name: "LaPerm", id: "lape" },
  //   { name: "Maine Coon", id: "mcoo" },
  //   { name: "Malayan", id: "mala" },
  //   { name: "Manx", id: "manx" },
  //   { name: "Munchkin", id: "munc" },
  //   { name: "Nebelung", id: "nebe" },
  //   { name: "Norwegian Forest Cat", id: "norw" },
  //   { name: "Ocicat", id: "ocic" },
  //   { name: "Oriental", id: "orie" },
  //   { name: "Persian", id: "pers" },
  //   { name: "Pixie-bob", id: "pixi" },
  //   { name: "Ragamuffin", id: "raga" },
  //   { name: "Ragdoll", id: "ragd" },
  //   { name: "Russian Blue", id: "rblu" },
  //   { name: "Savannah", id: "sava" },
  //   { name: "Scottish Fold", id: "sfol" },
  //   { name: "Selkirk Rex", id: "srex" },
  //   { name: "Siamese", id: "siam" },
  //   { name: "Siberian", id: "sibe" },
  //   { name: "Singapura", id: "sing" },
  //   { name: "Snowshoe", id: "snow" },
  //   { name: "Somali", id: "soma" },
  //   { name: "Sphynx", id: "sphy" },
  //   { name: "Tonkinese", id: "tonk" },
  //   { name: "Toyger", id: "toyg" },
  //   { name: "Turkish Angora", id: "tang" },
  //   { name: "Turkish Van", id: "tvan" },
  //   { name: "York Chocolate", id: "ycho" }
  // ];

  return (
    <div className="selection">
      <h2 className="selection__h2">
        Select a tag or breed to see images related to it!
      </h2>
      <p className="selection__h2-subtext">You can also use search button in the top right corner to find it faster <AiOutlineSearch className="selection__h2-subtext--icon"/></p>
      <h3 className="selection__h3">#Tags</h3>
      <div className="selection__container">
        {tagsArray.map((tag) => (
          <button
            className="selection__option"
            key={tag}
            style={{
              backgroundImage: `url(${imagesContext(`./tag-${tag}.jpg`)})`,
            }}
          >
            <div className="selection__option-name-background">
              <p className="selection__option-name">#{tag}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImagesSelectionPage;
