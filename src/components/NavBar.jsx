import React from 'react'
import Button from './Button'

export default function NavBar() {
    return (
        <div className="navBar_container">
                <nav className="navBar">
                <h1>Quizify</h1>
                <Button buttonStyle='secondaryButton' buttonText='Get Started'/>
            </nav>
        </div>
    )
}
