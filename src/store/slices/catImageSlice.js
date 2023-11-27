import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatImages } from "./api";

export const fetchCatImagesAsync = createAsyncThunk(
  "cat/fetchCatImage",
  async () => {
    const imageUrls = await fetchCatImages();
    return imageUrls;
  }
);

const catImageSlice = createSlice({
  name: "cat",
  initialState: {
    imageUrls: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default catImageSlice.reducer
export const selectCatImageUrls = (state) => state.cat.imageUrls
export const selectCatStatus = (state) => state.cat.status