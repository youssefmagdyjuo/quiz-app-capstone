import React from 'react'
import Button from './Button'

export default function PopUp({children,popIsOpen}) {
    const style =`colored_box popContainer ${popIsOpen?'desplay':''}`
    return (
        <div className={style}>
        <div className='pop'>
            {children}
        </div>
        </div>
    )
}
