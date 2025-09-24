import React from 'react'
import Button from './Button'
import { useOpenForm } from "../store/Q_Store";
export default function NavBar() {
    const {toggleVisible} = useOpenForm();
    return (
        <div className="navBar_container colored_box">
                <nav className="navBar">
                <h1>Quizify</h1>
                <Button buttomFunc={toggleVisible} buttonStyle='secondaryButton' buttonText='Get Started'/>
            </nav>
        </div>
    )
}
