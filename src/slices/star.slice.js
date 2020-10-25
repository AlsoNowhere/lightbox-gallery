
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showStars: false
};

const starsSlice = createSlice({
    name: "stars",
    initialState,
    reducers: {
        changeShowStars: (state, action) => {
            state.showStars = action.payload;
        }
    }
});

export const { changeShowStars } = starsSlice.actions;

export default starsSlice.reducer;
