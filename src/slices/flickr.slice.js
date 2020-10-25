
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalState: "",
    images: [],
    buttonDisabled: false,
    showImages: false,
    currentImage: null
}

const generateSrc = ({ server, id, secret }) => `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

const flickrSlice = createSlice({
    name: "flickr",
    initialState,
    reducers: {
        changeModalState: (state, action) => {
            state.modalState = action.payload;
        },
        changeButtonDisabled: (state, action) => {
            state.buttonDisabled = action.payload;
        },
        changeShowImages: (state, action) => {
            state.showImages = action.payload;
        },
        refreshImages: (state, action) => {
            state.images = action.payload.map(x => ({
                id: x.id,
                src: generateSrc(x),
                alt: x.title
            }));
        },
        changeCurrentImage: (state, action) => {
            state.currentImage = action.payload;
        },
    }
});

export const { changeModalState, changeButtonDisabled, changeShowImages, refreshImages, changeCurrentImage } = flickrSlice.actions;

export default flickrSlice.reducer;
