import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatImage } from "./api";

export const fetchCatImageAsync = createAsyncThunk(
  "cat/fetchCatImage",
  async () => {
    const imageUrl = await fetchCatImage();
    return imageUrl;
  }
);

const catImageSlice = createSlice({
  name: "cat",
  initialState: {
    imageUrl: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatImageAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.imageUrl = action.payload;
      })
      .addCase(fetchCatImageAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default catImageSlice.reducer
export const selectCatImageUrl = (state) => state.cat.imageUrl
export const selectCatStatus = (state) => state.cat.status