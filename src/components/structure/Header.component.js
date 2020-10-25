import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { updateSideBar } from "../../slices/aside.slice";

export const Header = () => {

    const sideBarState = useSelector(state => state.aside.sideBarState);
    const { zoom } = useSelector(state => state.zoom);

    const dispatch = useDispatch();

    const toggleSideBar = () => {
        dispatch(updateSideBar(sideBarState === "" ? "active": ""));
    }

    return (
        <header>
            <h1>Lightbox gallery</h1>

            <div>
                {zoom !== 100 && (<p>{zoom}%</p>)}

                <button type="button" onClick={toggleSideBar}>
                    <span className={`fa fa-arrow-left ${sideBarState === "" ? "" : "active"}`}></span>
                </button>
            </div>
        </header>
    )
}
