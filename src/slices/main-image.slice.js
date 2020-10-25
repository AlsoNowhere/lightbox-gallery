
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    src: "",
    alt: "",
    name: "",
    tags: [],
    aspectRatio: 0,
    currentId: null,
    loading: false
};

const mainImageSlice = createSlice({
    name: "mainImage",
    initialState,
    reducers: {
        showLoading: state => {
            state.loading = true;
        },
        changeMainImage: (state, action) => {
            state.src = action.payload.src;
            state.alt = action.payload.alt;
            state.name = action.payload.name;
            state.tags = action.payload.tags;
            state.aspectRatio = action.payload.aspectRatio;
            state.currentId = action.payload.id;
            state.loading = false;
        }
    }
});

export const { showLoading, changeMainImage } = mainImageSlice.actions;

export default mainImageSlice.reducer;
