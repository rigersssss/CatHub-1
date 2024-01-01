import axios from "axios";

const TCA_API_KEY =
  "live_65caNqcO4RblXstT22gc6z7a4CafgqzfFsiWN4pwm287UNdajrH4wAikTDjYwjdW";

const PEXELS_API_KEY =
  "vP6R4K2xXnxI81F2c2k4YqDQMdFtnduri1xcYesv6dLHzxgq1ususS9X";

// Getting Images with or without given breed (The Cat API)
export const fetchCatImages = async (breedName = "") => {
  try {
    let apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

    // Check if breedName is provided and not equal to "Random"
    if (breedName && breedName !== "Random") {
      console.log("breed has been chosen");
      apiUrl += `&breed_id=${breedName}`;
    }

    const response = await axios.get(apiUrl, {
      params: { api_key: TCA_API_KEY },
    });

    // Shuffle the cat images urls randomly to prevent displaying images in the same order if there are less than 10 images
    const shuffledImageUrls = response.data
      .map((cat) => cat.url)
      .sort(() => Math.random() - 0.5);

    return shuffledImageUrls;
  } catch (err) {
    console.error("Error fetching cat images:", err);
    throw err;
  }
};

// Getting Breeds (The Cat API)
export const fetchCatBreeds = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
      params: { api_key: TCA_API_KEY },
    });
    console.log("breeds response:", response.data);
    const catBreeds = response.data.map((breed) => ({
      // Main data
      name: breed.name,
      id: breed.id,
      
      // Additional data
      description: breed.description,
      temperament: breed.temperament,
      lifespan: breed.life_span,
      weight: breed.weight,

      energy: breed.energy_level,
      health: breed.health_issues,
      intelligence: breed.intelligence,
      shedding: breed.shedding_level,
      social: breed.social_needs,
      stranger: breed.stranger_friendly,
      
      more: breed.vcahospitals_url,
    }));
    return catBreeds;
  } catch (err) {
    console.error("Error fetching cat breeds:", err);
    throw err;
  }
};

// Getting Images with given tag (Pexels)
export const fetchCatImagesByTags = async (tag) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${tag}+cat&per_page=80`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );

    // Random selecting 10 images out of 80
    const shuffledPhotos = response.data.photos.sort(() => 0.5 - Math.random());
    const selectedPhotos = shuffledPhotos.slice(0, 10);

    // Checking screen width
    const isLargeScreen = window.innerWidth > 900;

    // Downloading images depending on screen resolution
    const images = selectedPhotos.map((photo) =>
      isLargeScreen ? photo.src.landscape : photo.src.large
    );

    console.log("Fetched random images with tags:\n", images.join("\n"));
    return images;
  } catch (err) {
    console.error("Error fetching cat images by tags:", err);
    throw err;
  }
};
