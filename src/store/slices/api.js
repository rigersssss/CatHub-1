import axios from "axios";

const API_KEY =
  "live_65caNqcO4RblXstT22gc6z7a4CafgqzfFsiWN4pwm287UNdajrH4wAikTDjYwjdW";

//  Getting Images
export const fetchCatImages = async (breedName = "") => {
  try {
    let apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

    // Check if breedName is provided and not equal to "Random"
    if (breedName && breedName !== "Random") {
      console.log("breed has been chosen");
      apiUrl += `&breed_id=${breedName}`;
    }

    const response = await axios.get(apiUrl, {
      params: { api_key: API_KEY },
    });

    // Get images urls
    const catImageUrls = response.data.map((cat) => cat.url);
    console.table(catImageUrls);

    return catImageUrls;
  } catch (err) {
    console.error("Error fetching cat images:", err);
    throw err;
  }
};

// Getting Breeds
export const fetchCatBreeds = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
      params: { api_key: API_KEY },
    });
    const catBreeds = response.data.map((breed) => ({
      name: breed.name,
      id: breed.id,
    }));
    return catBreeds;
  } catch (error) {
    console.error("Error fetching cat breeds:", error);
    throw error;
  }
};
