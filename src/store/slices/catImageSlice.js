import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatImages, fetchCatBreeds } from "./api";

export const fetchCatImagesAsync = createAsyncThunk(
  "cat/fetchCatImage",
  async () => {
    const imageUrls = await fetchCatImages();
    return imageUrls;
  }
);

export const fetchCatBreedsAsync = createAsyncThunk(
  "cat/fetchCatBreeds",
  async () => {
    const breeds = await fetchCatBreeds();
    return breeds;
  }
);

const catImageSlice = createSlice({
  name: "cat",
  initialState: {
    imageUrls: [],
    catBreeds: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Images request
      .addCase(fetchCatImagesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatImagesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.imageUrls = action.payload;
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
      });
  },
});

export default catImageSlice.reducer;
export const selectCatImageUrls = (state) => state.cat.imageUrls;
export const selectCatStatus = (state) => state.cat.status;
export const selectCatBreeds = (state) => state.cat.catBreeds;