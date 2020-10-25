import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { asideOptions } from "../../data/aside-options.data";

export const Aside = () => {

    const imageThumbnails = useSelector(state => state.imageThumbnails);
    const { sideBarState, activeButtons, hiddenButtons } = useSelector(state => state.aside);
    const selectImages = useSelector(state => state.selectImages);
    const { showFlags } = useSelector(state => state.flags);
    const { showStars } = useSelector(state => state.stars);
    const { zoom } = useSelector(state => state.zoom);

    const dispatch = useDispatch();

    const state = {
        dispatch,
        sideBarState,
        selectImages,
        activeButtons,
        imageThumbnails,
        showFlags,
        showStars,
        zoom
    };

    return (
        <aside className={sideBarState}>
            <ul>
                {asideOptions
                .filter(x => !hiddenButtons.includes(x.id))
                .map((asideOption, i) => (
                    <li key={i}>
                        <button type="button"
                            className={activeButtons.includes(asideOption.id) ? "active" : ""}
                            onClick={() => asideOption.action && asideOption.action(state)}>
                            <span className={`fa fa-${asideOption.icon}`}></span>

                            <span>{asideOption.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
