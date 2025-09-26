import React from 'react'
import Button from './Button'
import {useMode }from '../store/Q_Store' 
export default function Toggle() {
    const {lightMode,toggleLightMode}= useMode()
    function handelClickToggle(){
        toggleLightMode()
    }
    return (
                <Button 
                buttonStyle='secondaryButton'
                buttomFunc={handelClickToggle}
                >
                    <div 
                    className="toggle"
                    style={{transform: lightMode 
                        ? 'translateX(-1.4rem)' 
                        : 'translateX(4.6rem)' }}
                    >
                    </div>
                </Button>
    )
}
