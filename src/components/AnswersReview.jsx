import React from 'react'
import { useQuestionStore } from '../store/Q_Store'
export default function AnswersReview() {
    const {questions} = useQuestionStore()
    return (
        <>
        <h1 style={{textAlign:'center',fontSize:'2rem',margin:'2rem'}}>Review your Answers</h1>
        <div className='AnswersReview_container'>
            {
                questions.map(q=>(
                    <div className="questionReview_container" style={{background:q.status=='correct'?'linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)':'#B91212'}}>
                        <div className="questionReview">
                                <div style={{textAlign:'center'}}>Q : </div>
                                <div>
                                    {q.question}
                                </div>
                                <div style={{textAlign:'center',color:'var(--primary-color)'}}>A : </div>
                                <div>
                                    {q.correct_answer}
                                </div>
                                {/* show user answer if it is wrong or unAnswered */}
                                {
                                q.status!='correct'
                                ? (
                                    <>
                                        <div style={{textAlign:'center',color:'#B91212'}}>Yours</div>
                                        <div style={{color:'#B91212'}}>
                                            {q.userAnswer}
                                        </div>
                                    </>
                                )
                                : ''
                                }
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}
