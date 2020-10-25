import React from "react";

export const Modal = props => {

    const { title, state, onClose, full = false } = props;

    return (
        <article className={`modal ${state} ${full ? "full" : ""}`}>
            <div className="content">
                <header>
                    {title && (<h2>{title}</h2>)}
                    <button type="button" onClick={onClose}>
                        <span className="fa fa-times"></span>
                    </button>
                </header>

                {props.children}
            </div>
        </article>
    )
}
