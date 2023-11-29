import axios from "axios";

const API_KEY =
  "live_65caNqcO4RblXstT22gc6z7a4CafgqzfFsiWN4pwm287UNdajrH4wAikTDjYwjdW";

  export const fetchCatImages = async (breedId = "") => {
  try {
    // If a breed wasn't chosen, request 10 random images; otherwise, get 10 images of the chosen breed
    const params = breedId
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

export const fetchCatBreeds = async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
        params: { api_key: API_KEY },
      });
      const catBreeds = response.data.map((breed) => breed.name);
      console.log("Cat Breeds:", catBreeds);
      return catBreeds;
    } catch (error) {
      console.error("Error fetching cat breeds:", error);
      throw error;
    }
  };