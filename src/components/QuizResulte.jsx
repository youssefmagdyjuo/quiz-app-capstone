import React from 'react'
import { useQuestionStore } from '../store/Q_Store'
import Button from './Button'
import { Link } from 'react-router-dom'
export default function QuizResulte() {
    const {questions,score,resetQuestions} = useQuestionStore()
    const percentage =score/questions.length*100
    let statusStyle;
    if(percentage>=50){
        statusStyle ='success'
    }else{
        statusStyle ='faild'
    }
    return (
        <div className='QuizResulte_container'>
        <div className="userResulteStatus">
            <h1 className={statusStyle}>
                {
                    percentage>=50?'Success !!':'Faild !!'
                }
                
            </h1>
            <p>
                {
                    percentage>=50
                    ?`Congratulations!  You did it! Your 
                    hard work and determination paid off. 
                    This success is just the beginning — keep 
                    pushing forward, greater achievements are 
                    waiting for you!"`
                    :`Don’t be discouraged — failing an exam doesn’
                    t define your worth or your 
                    future. setback is a setup for a comeback. 
                    Learn from this, grow stronger, and keep moving 
                    forward. Success will come your way!"`
                }
                
            </p>
            <Link to={'/'}>
                    <Button
                    buttonText='< Home'
                    buttonStyle='secondaryButton'
                    buttomFunc={resetQuestions}
                    />
            </Link>
        </div>
        <div 
        className="scoreStatus_container"
        style={{background:percentage>=50?'var(--mix-bg1)':'var(--mix-bg2)'}}
        >
            <div className="scoreStatus">
                <h2 className={statusStyle}>
                {`${percentage}%`}
                </h2>
            </div>
        </div>
        </div>
    )
}
