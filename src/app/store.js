import { configureStore } from "@reduxjs/toolkit";

import thumbnailSlice from "../slices/thumbnail.slice";
import mainImageSlice from "../slices/main-image.slice";
import asideSlice from "../slices/aside.slice";
import searchModalSlice from "../slices/search-modal.slice";
import selectImagesSlice from "../slices/select-images.slice";
import flagsSlice from "../slices/flag.slice";
import toastSlice from "../slices/toast.slice";
import starsSlice from "../slices/star.slice";
import flickrSlice from "../slices/flickr.slice";
import zoomSlice from "../slices/zoom.slice";

export default configureStore({
    reducer: {
        imageThumbnails: thumbnailSlice,
        mainImage: mainImageSlice,
        aside: asideSlice,
        searchModal: searchModalSlice,
        selectImages: selectImagesSlice,
        flags: flagsSlice,
        toast: toastSlice,
        stars: starsSlice,
        flickr: flickrSlice,
        zoom: zoomSlice,
    },
});
