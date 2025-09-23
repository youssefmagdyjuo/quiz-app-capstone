import React, { useState } from "react";
import { useOpenForm } from "../store/Q_Store";
export default function Select({options,title}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(title);
    const {setCategory,setDifficulty} = useOpenForm();
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
                    {options.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => {
                                setSelected(option.name);
                                // set the category or difficulty in the store for use in fetching questions
                                if(title === "Category") setCategory(option.id);
                                if(title === "Difficulty") setDifficulty(option.name.toLowerCase());
                                setIsOpen(false);
                            }}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
