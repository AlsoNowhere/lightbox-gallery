
import { changeShowStars } from "../../slices/star.slice";
import { addActiveButton, hideButtonById, removeActiveButton, showButtonById } from "../../slices/aside.slice";

import { asideOptions } from "../../data/aside-options.data";

export const toggleShowStars = function({ dispatch, showStars, activeButtons }) {
    dispatch(changeShowStars(!showStars));

    const isActive = activeButtons.includes(this.id);

    const idOfSelectButton = asideOptions.find(x => x.label === "Select images").id;
    const idOfFlagButton = asideOptions.find(x => x.label === "Report image").id;

    !isActive
        ? dispatch(hideButtonById(idOfSelectButton))
        : dispatch(showButtonById(idOfSelectButton));

    !isActive
        ? dispatch(hideButtonById(idOfFlagButton))
        : dispatch(showButtonById(idOfFlagButton));

    isActive
        ? dispatch(removeActiveButton(this.id))
        : dispatch(addActiveButton(this.id));
}
