
import { changeZoom } from "../../slices/zoom.slice";

export const zoomIn = ({ dispatch, zoom: currentZoom }) => {
    dispatch(changeZoom(currentZoom += 10));
}

export const zoomOut = ({ dispatch, zoom: currentZoom }) => {
    if (currentZoom === 100) {
        return;
    }
    dispatch(changeZoom(currentZoom -= 10));
}