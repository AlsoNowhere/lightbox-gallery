import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FooterThumbnail } from "./FooterThumbnail.component";

import { addThumbnail, updateThumbnailImageDetails } from "../../../slices/thumbnail.slice";

const getThumbnails = async (dispatch) => {
    const response = await fetch("https://run.mocky.io/v3/525464b2-740b-40f8-9fb4-1cf0a6be1a6d");
    if (response.status !== 200) {
        return;
    }
    const data = await response.json();
    data
    // .slice(0, 3)
    .forEach(each => {
        dispatch(addThumbnail({ id: each.id, loading: true }));
        const img = new Image();
        img.onload = function(){
            dispatch(updateThumbnailImageDetails({ ...each, loading: false, selected: false }));
        }
        img.src = each.fileurl;
    });
}

export const Footer = () => {

    const imageThumbnails = useSelector(state => state.imageThumbnails);
    const mainImage = useSelector(state => state.mainImage);
    const searchModal = useSelector(state => state.searchModal);

    const dispatch = useDispatch();

    useEffect(() => {
        getThumbnails(dispatch);
    }, [dispatch]);

    return (
        <footer>
            <ul>
                {imageThumbnails
                    .filter(x => searchModal.query === null || (x.metadata && x.metadata.toLowerCase().includes(searchModal.query.toLowerCase())))
                    .map(thumbnail => (
                        <li className={mainImage.currentId === thumbnail.id ? "active" : ""}
                            key={thumbnail.id}>
                            <FooterThumbnail thumbnail={thumbnail} />
                        </li>
                    ))}
            </ul>
        </footer>
    )
}
