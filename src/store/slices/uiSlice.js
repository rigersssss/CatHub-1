import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showNav: false,
    },
    reducers: {
        setShowNav: (state, action) => {
            state.showNav = action.payload
            console.log("showNav:", state.showNav);
        }
    }
})

export default uiSlice.reducer
export const selectShowNav = (state) => state.ui.showNav