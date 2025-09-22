import React from 'react'

export default function Button({buttonStyle,buttonText,buttomFunc}) {
    const styles = `button ${buttonStyle}`;
    return (
        <div className='buttonContainer'>
            <button 
            className={styles}
            onClick={buttomFunc}
            >
            {buttonText}
            </button>
        </div>
    )
}
