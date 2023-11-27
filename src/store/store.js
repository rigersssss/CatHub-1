import { configureStore } from "@reduxjs/toolkit";
import catImageReducer from "./slices/catImageSlice";

export const store = configureStore({
    reducer: {
        cat: catImageReducer,
    }
})