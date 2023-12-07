import axios from "axios";

const API_KEY =
  "live_65caNqcO4RblXstT22gc6z7a4CafgqzfFsiWN4pwm287UNdajrH4wAikTDjYwjdW";


// Getting Images
export const fetchCatImages = async (breedId = "") => {
  try {
    // If a breedId is provided and it's not "Random", include it in the parameters
    const params =
      breedId && breedId !== "Random"
        ? { api_key: API_KEY, limit: 10, breed_id: breedId }
        : { api_key: API_KEY, limit: 10 };

    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      {
        params: params,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cat image:", error);
    throw error;
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

