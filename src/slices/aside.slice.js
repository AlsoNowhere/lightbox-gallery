
import { createSlice } from "@reduxjs/toolkit";
import { asideOptions } from "../data/aside-options.data";

const initialState = {
    sideBarState: "",
    activeButtons: [],
    hiddenButtons: asideOptions.filter(x => x.initiallyHidden).map(x => x.id)
}

const asideSlice = createSlice({
    name: "aside",
    initialState,
    reducers: {
        updateSideBar: (state, action) => {
            state.sideBarState = action.payload;
        },
        addActiveButton: (state, action) => {
            if (state.activeButtons.includes(action.payload)) {
                return;
            }
            state.activeButtons.push(action.payload);
        },
        removeActiveButton: (state, action) => {
            const index = state.activeButtons.indexOf(action.payload);
            if (index === -1) {
                return;
            }
            state.activeButtons.splice(index, 1);
        },
        hideButtonById: (state, action) => {
            if (state.hiddenButtons.includes(action.payload)) {
                return;
            }
            state.hiddenButtons.push(action.payload);
        },
        showButtonById: (state, action) => {
            const index = state.hiddenButtons.indexOf(action.payload);
            if (index === -1) {
                return;
            }
            state.hiddenButtons.splice(index, 1);
        }
    }
});

export const { updateSideBar, addActiveButton, removeActiveButton, hideButtonById, showButtonById } = asideSlice.actions;

export default asideSlice.reducer;
