
import { changeShowFlags } from "../../slices/flag.slice";
import { addActiveButton, hideButtonById, removeActiveButton, showButtonById } from "../../slices/aside.slice";

import { asideOptions } from "../../data/aside-options.data";

export const toggleShowFlags = function({ dispatch, showFlags, activeButtons }) {
    dispatch(changeShowFlags(!showFlags));

    const isActive = activeButtons.includes(this.id);

    const idOfFavoriteButton = asideOptions.find(x => x.label === "Choose favorites").id;
    const idOfSelectButton = asideOptions.find(x => x.label === "Select images").id;

    !isActive
        ? dispatch(hideButtonById(idOfFavoriteButton))
        : dispatch(showButtonById(idOfFavoriteButton));

    !isActive
        ? dispatch(hideButtonById(idOfSelectButton))
        : dispatch(showButtonById(idOfSelectButton));

    isActive
        ? dispatch(removeActiveButton(this.id))
        : dispatch(addActiveButton(this.id));
}
