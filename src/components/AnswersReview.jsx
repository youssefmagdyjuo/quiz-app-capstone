import React from 'react'
import { useQuestionStore } from '../store/Q_Store'
export default function AnswersReview() {
    const {questions} = useQuestionStore()
    return (
        <>
        <h1 style={{textAlign:'center',fontSize:'1.8rem',margin:'2rem'}}>Review your Answers</h1>
        <div className='AnswersReview_container'>
            {
                questions.map(q=>(
                    <div className="questionReview_container" style={{background:q.status=='correct'?'linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)':q.status=='wrong'?'var(--dengar)':'var(--gray)'}}>
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
                                        <div style={{textAlign:'center',color:q.status=='wrong'?'var(--dengar)':'#666'}}>Yours : </div>
                                        <div style={{color:q.status=='wrong'?'var(--dengar)':'#555'}}>
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
