
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showToast: false,
    message: ""
};

const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        changeShowToast: (state, action) => {
            state.showToast = action.payload;
        },
        changeToastMessage: (state, action) => {
            state.message = action.payload;
        }
    }
});

export const { changeShowToast, changeToastMessage } = toastSlice.actions;

export default toastSlice.reducer;
