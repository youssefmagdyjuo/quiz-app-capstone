import React from 'react'
import Select from './select';
import Button from './Button';
import { useOpenForm } from '../store/Q_Store';
export default function Form({isVaisble}) {
    const options = ["Sports", "History", "Politics", "Geography", "Animals"];
    const options2 = ["Easy", "Medium", "Hard"];
    const styles = `formContainerPage ${isVaisble ? 'desplay' : ''}`;
    const {toggleVisible} = useOpenForm();
    return (
        <div className={styles}
        onClick={(e) => {
            if(e.target.className === 'formContainerPage desplay'){
                // close the form when clicking outside the form
                toggleVisible();
                }}}
        >
            <div className='form_container'>
            <div className='form' action="">
                <h1>Quiz type</h1>
                <Select options={options} title="Choose Category"/>
                <Select options={options2} title="Level"/>
                <Button buttonStyle='primaryButton' buttonText='Start Quiz'/>
            </div>
        </div>
        </div>
    )
}
