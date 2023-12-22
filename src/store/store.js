import { configureStore } from "@reduxjs/toolkit";
import catImageReducer from "./slices/catImageSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
    reducer: {
        cat: catImageReducer,
        ui: uiReducer,
    }
})
