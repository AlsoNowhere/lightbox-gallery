
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    zoom: 100
}

const zoomSlice = createSlice({
    name: "zoom",
    initialState,
    reducers: {
        changeZoom: (state, action) => {
            state.zoom = action.payload;
        }
    }
});

export const { changeZoom } = zoomSlice.actions;

export default zoomSlice.reducer;
