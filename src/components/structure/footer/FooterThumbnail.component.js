import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Loading } from "../../common/Loading.component";

import { removeThumbnail, updateThumbnailImageDetails } from "../../../slices/thumbnail.slice";
import { showLoading, changeMainImage } from "../../../slices/main-image.slice";
import { showButtonById } from "../../../slices/aside.slice";

import { asideOptions } from "../../../data/aside-options.data";
import { toastStore } from "../../../stores/toast.store";

const styles = thumbnail => {
    const imageStyles = {};
    imageStyles.width = `${(thumbnail.aspectratio < 1 ? (1 / thumbnail.aspectratio) : thumbnail.aspectratio) * 100}%`;
    return imageStyles;
}

export const FooterThumbnail = ({ thumbnail }) => {

    const selectImages = useSelector(state => state.selectImages);
    const { showFlags } = useSelector(state => state.flags);
    const { showStars } = useSelector(state => state.stars);

    const dispatch = useDispatch();

    const updateMainImage = (thumbnail) => {
        dispatch(showLoading());
        dispatch(showButtonById(asideOptions.find(x => x.label === "Similar images").id));
        dispatch(showButtonById(asideOptions.find(x => x.label === "Zoom in").id));
        dispatch(showButtonById(asideOptions.find(x => x.label === "Zoom out").id));

        const img = new Image();
        img.onload = function(){
            dispatch(changeMainImage({
                src: thumbnail.fileurl,
                alt: thumbnail.metadata,
                name: thumbnail.name,
                tags: thumbnail.metadata.split(","),
                id: thumbnail.id,
                aspectRatio: thumbnail.aspectratio
            }));
        }
        img.src = thumbnail.fileurl;
    }

    const handleError = thumbnail => {
        dispatch(removeThumbnail(thumbnail));
    }

    const checkSelectBox = () => {
        dispatch(updateThumbnailImageDetails({ id: thumbnail.id, selected: !thumbnail.selected }));
    }

    const reportImage = (event, thumbnail) => {
        event.stopPropagation();
        dispatch(updateThumbnailImageDetails({ id: thumbnail.id, flagged: !thumbnail.flagged }));
        if (!thumbnail.flagged) {
            toastStore.showToast = true;
            toastStore.message = `Image ${thumbnail.name} reported.`;
        }
    }

    const favoriteImage = (event, thumbnail) => {
        event.stopPropagation();
        dispatch(updateThumbnailImageDetails({ id: thumbnail.id, favorited: !thumbnail.favorited }));
    }

    return (
        <>
            {thumbnail.loading ? (
                <Loading />
            ) : (
                <div className="tile" onClick={() => updateMainImage(thumbnail)}>
                    <img src={thumbnail.thumbnailurl}
                        alt={thumbnail.metdata}
                        style={styles(thumbnail)}
                        onError={() => handleError(thumbnail)} />
                        
                    {selectImages.showCheckboxes && (
                        <input type="checkbox"
                            checked={thumbnail.selected}
                            onClick={event => event.stopPropagation()}
                            onChange={event => checkSelectBox(event)} />
                    )}

                    {showFlags && (
                        <button type="button" className="flag" onClick={event => reportImage(event, thumbnail)}>
                            <span className={`fa fa-flag${thumbnail.flagged ? " reported" : "-o"}`}></span>
                        </button>
                    )}

                    {showStars && (
                        <button type="button" className="star" onClick={event => favoriteImage(event, thumbnail)}>
                            <span className={`fa fa-star${thumbnail.favorited ? " favorited" : "-o"}`}></span>
                        </button>
                    )}
                </div>
            )}
        </>
    )
}
