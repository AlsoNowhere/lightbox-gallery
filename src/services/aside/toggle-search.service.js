
import { changeState } from "../../slices/search-modal.slice";

export const toggleSearch = ({ dispatch, sideBarState }) => {
    dispatch(changeState(sideBarState === "" ? "active" : ""));
}
