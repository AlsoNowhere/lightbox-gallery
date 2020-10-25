import React from "react";

export const Field = ({ name, label, value, onChange, required = false }) => {
    return (
        <label>
            {label && (<span>{label}</span>)}
            
            <input name={name}
                value={value}
                onChange={event => onChange && onChange(event.target.value)}
                required={required} />
        </label>
    )
}
