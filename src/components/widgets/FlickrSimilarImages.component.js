import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../common/Modal.component";

import { changeButtonDisabled, changeModalState, changeShowImages, refreshImages, changeCurrentImage } from "../../slices/flickr.slice";

export const FlickrSimilarImages = () => {

    const { modalState, buttonDisabled, showImages, currentImage, images } = useSelector(state => state.flickr);
    const { name, tags } = useSelector(state => state.mainImage);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(changeButtonDisabled(false));
        dispatch(changeModalState(""));
        dispatch(refreshImages([]));
        dispatch(changeShowImages(false));
        dispatch(changeCurrentImage(null))
    }

    const loadImages = async () => {

        dispatch(changeButtonDisabled(true));

        const baseUrl = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=8c1523e1bea3e55efd1d5d66b398c592";
        const details = {
            format: "json",
            nojsoncallback: 1,
            tags: tags.join(","),
            tag_mode: "all",
            per_page: 5
        };
        const url = `${baseUrl}${Object.entries(details).map(x => `&${x[0]}=${x[1]}`).join("")}`;
        const response = await fetch(url);
        const parsed = await response.json();

        dispatch(refreshImages(parsed.photos.photo));
        dispatch(changeShowImages(true));
    }

    return (
        <Modal title="Use Flickr to find similar images"
            state={modalState}
            onClose={closeModal}
            full={true}>
            <div className="flickr-modal">
                {!showImages
                    ? (
                    <div className="pre-images">
                        <p>{name}</p>

                        <p>Tags</p>

                        <ul>
                            {tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>

                        <button type="button"
                            disabled={buttonDisabled}
                            onClick={loadImages}>Find images</button>
                    </div>
                    )
                    : (
                        <div className="images">
                            <article>
                                {currentImage && (<img src={currentImage.src} alt={currentImage.alt} />)}
                            </article>

                            <ul>
                                {images.map(image => (
                                    <li key={image.id} onClick={() => dispatch(changeCurrentImage(image))}>
                                        <div>
                                            <img src={image.src} alt={image.title} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}


            </div>
        </Modal>
    )
}
