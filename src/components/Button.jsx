import React from 'react'

export default function Button({buttonStyle,buttonText,buttomFunc,children,type}) {
    const styles = `button ${buttonStyle}`;
    return (
        <div className='buttonContainer colored_box'>
            <button 
            className={styles}
            onClick={buttomFunc}
            type={type}
            
            >
            {buttonText}
            {children}
            </button>
        </div>
    )
}
