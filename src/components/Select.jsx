import React, { useState } from "react";

export default function Select({options,title}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(title);


    return (
        <div className="dropdown">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="dropbtn"
            >
                <span className="selected">
                    {selected}
                    <span>▼</span>
                    </span>
            </button>
            {isOpen && (
                <ul className="dropdown-content">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
