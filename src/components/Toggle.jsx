import React from 'react'
import Button from './Button'
import {useMode }from '../store/Q_Store' 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
export default function Toggle() {
    const {lightMode,toggleLightMode}= useMode()
    function handelClickToggle(){
        toggleLightMode()
    }
    return (
                <Button 
                buttonStyle='toggle_bg'
                buttomFunc={handelClickToggle}
                >
                    <div 
                    className="toggle"
                    style={{transform: lightMode 
                        ? 'translateX(-1.4rem)' 
                        : 'translateX(4.6rem)' }}
                    >
                        {
                            lightMode?(
                                <>
                                <i class="fa-solid fa-sun"></i>
                                </>
                            ):(
                                <>
                                <i class="fa-solid fa-moon"></i>
                                </>
                            )
                        }
                    </div>
                </Button>
    )
}
