
import { changeShowCheckboxesState } from "../../slices/select-images.slice";
import { addActiveButton, hideButtonById, removeActiveButton, showButtonById } from "../../slices/aside.slice";

import { asideOptions } from "../../data/aside-options.data";

export const selectImages = function({ dispatch, selectImages, activeButtons }) {
    dispatch(changeShowCheckboxesState(!selectImages.showCheckboxes));

    const isActive = activeButtons.includes(this.id);

    const idOfDownloadButton = asideOptions.find(x => x.label === "Download zip").id;
    const idOfFlagButton = asideOptions.find(x => x.label === "Report image").id;
    const idOfFavoriteButton = asideOptions.find(x => x.label === "Choose favorites").id;

    isActive
        ? dispatch(hideButtonById(idOfDownloadButton))
        : dispatch(showButtonById(idOfDownloadButton));

    !isActive
        ? dispatch(hideButtonById(idOfFlagButton))
        : dispatch(showButtonById(idOfFlagButton));

    !isActive
        ? dispatch(hideButtonById(idOfFavoriteButton))
        : dispatch(showButtonById(idOfFavoriteButton));

    isActive
        ? dispatch(removeActiveButton(this.id))
        : dispatch(addActiveButton(this.id));

}
