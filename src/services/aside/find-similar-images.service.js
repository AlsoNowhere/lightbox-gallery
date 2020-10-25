
import { changeModalState } from "../../slices/flickr.slice";

export const setUpModal = ({ dispatch }) => {
    dispatch(changeModalState("active"));
}
