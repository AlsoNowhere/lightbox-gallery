
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const thumbnailSlice = createSlice({
    name: "imageThumbnails",
    initialState,
    reducers: {
        addThumbnail: (state, action) => {
            state.push(action.payload);
        },
        updateThumbnailImageDetails: (state, action) => {
            const index = state.findIndex(x => x.id === action.payload.id);
            Object.assign(state[index], action.payload);
        },
        removeThumbnail: (state, action) => {
            const index = state.findIndex(x => x.id === action.payload.id);
            state.splice(index, 1);
        }
    }
});

export const { addThumbnail, updateThumbnailImageDetails, removeThumbnail } = thumbnailSlice.actions;

export default thumbnailSlice.reducer;
