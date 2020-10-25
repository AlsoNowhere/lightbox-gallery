
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showFlags: false
};

const flagsSlice = createSlice({
    name: "flags",
    initialState,
    reducers: {
        changeShowFlags: (state, action) => {
            state.showFlags = action.payload;
        }
    }
});

export const { changeShowFlags } = flagsSlice.actions;

export default flagsSlice.reducer;
