
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCheckboxes: false
}

const selectImagesSlice = createSlice({
    name: "selectImages",
    initialState,
    reducers: {
        changeShowCheckboxesState: (state, action) => {
            state.showCheckboxes = action.payload;
        }
    }
});

export const { changeShowCheckboxesState } = selectImagesSlice.actions;

export default selectImagesSlice.reducer;
