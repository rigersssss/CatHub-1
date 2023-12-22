import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatBreeds, fetchCatImages, fetchCatImagesByTags } from "./api";

export const fetchCatImagesAsync = createAsyncThunk(
  "cat/fetchCatImages",
  async (id) => {
    const images = await fetchCatImages(id);
    return images;
  }
);

export const fetchCatBreedsAsync = createAsyncThunk(
  "cat/fetchCatBreeds",
  async () => {
    const breeds = await fetchCatBreeds();
    return breeds;
  }
);

export const fetchCatImagesByTagsAsync = createAsyncThunk(
  "cat/fetchCatImagesByTags",
  async (tag) => {
    const tags = await fetchCatImagesByTags(tag)
    return tags
  }
)

const catImageSlice = createSlice({
  name: "cat",
  initialState: {
    userSelectedBreed: { name: "", id: "" },
    catImages: [],
    catBreeds: [],
    catImagesDispatchedFirstTime: false,
  },
  reducers: {
    setCatImagesDispatchedFirstTime: (state, action) => {
      state.catImagesDispatchedFirstTime = action.payload;
    },
    setUserSelectedBreed: (state, action) => {
      state.userSelectedBreed = action.payload;
      console.log(state.userSelectedBreed);
    },
  },
  extraReducers: (builder) => {
    builder
      // Images request
      .addCase(fetchCatImagesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatImagesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.catImages = action.payload;
      })
      .addCase(fetchCatImagesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Breeds request
      .addCase(fetchCatBreedsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatBreedsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.catBreeds = action.payload;
      })
      .addCase(fetchCatBreedsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Tags request
      .addCase(fetchCatImagesByTagsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatImagesByTagsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.catImages = action.payload;
      })
      .addCase(fetchCatImagesByTagsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export default catImageSlice.reducer;
export const { setUserSelectedBreed, setCatImagesDispatchedFirstTime } = catImageSlice.actions;
export const selectCatBreeds = (state) => state.cat.catBreeds;
export const selectUserSelectedBreed = (state) => state.cat.userSelectedBreed;
export const selectCatImages = (state) => state.cat.catImages
export const selectCatImagesDispatchedFirstTime = (state) => state.cat.catImagesDispatchedFirstTime