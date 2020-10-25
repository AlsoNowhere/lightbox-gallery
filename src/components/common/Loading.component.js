import React from "react";

export const Loading = ({ state = true }) => {
    return (
        <div className={`loading ${state ? "show" : ""}`}>
            <span className="fa fa-spinner fa-spin"></span>
        </div>
    )
}
