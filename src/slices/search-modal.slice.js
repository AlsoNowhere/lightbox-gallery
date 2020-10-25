
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: "",
    query: null
};

const searchModalSlice = createSlice({
    name: "searchModal",
    initialState,
    reducers: {
        changeState: (state, action) => {
            state.state = action.payload;
        },
        changeQuery: (state, action) => {
            state.query = action.payload;
        }
    }
});

export const { changeState, changeQuery } = searchModalSlice.actions;

export default searchModalSlice.reducer;
