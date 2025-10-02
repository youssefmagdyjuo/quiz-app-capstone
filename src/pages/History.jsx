import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useQuestionStore } from '../store/Q_Store'
import PopUp from '../components/PopUp';
import { useState } from 'react';
export default function History() {
    const { quizzes ,resetQuizzes} = useQuestionStore();
    const [pop,setPop]=useState(false)
    return (
        <div>
        <PopUp popIsOpen={pop}>
            <h1 className='text-xl'>Are you sure ?</h1>
            <div className='flex gap-2'>
            <Button buttonText='Yes' buttonStyle='primaryButton' buttomFunc={()=>{resetQuizzes(),setPop(false)}}></Button>
            <Button buttonText='No' buttonStyle='secondaryButton'buttomFunc={()=>{setPop(false)}}></Button>
            </div>
        </PopUp>
            <h1 className='text-center text-4xl m-4 text-[var(--text-color)]'>All Quizzes</h1>
            <div className='historyContainer'>
                {
                    quizzes && quizzes.length > 0 ? (
                        quizzes.map((quiz, index) => (
                            <div
                                key={index}
                                className="QuizContainer"
                                style={{ background: quiz.quizScore > 50 ? "var(--mix-bg1)" : "var(--mix-bg2)" }}
                            >
                                <div className="Quiz">
                                    <h2 className="text-center mb-4 text-xl">{quiz.quizCategory}</h2>
                                    <div className="QuizDetails">
                                        <p>Number of questions</p>
                                        <div>{quiz.quizNumberOfQuestions}</div>
                                        <p>Difficulty</p>
                                        <div>{quiz.quizDifficulty}</div>
                                        <p>Score</p>
                                        <div
                                            className={quiz.quizScore > 50 ? "coloredText1" : "coloredText2"}
                                        >
                                            {`${Math.round((quiz.quizScore / quiz.quizNumberOfQuestions) * 100)}%`}
                                        </div>
                                    </div>

                                    <Link to={`/history/quizDetails/${index}`}>
                                        <div style={{ marginTop: "1rem", placeItems: "center" }}>
                                            <Button buttonText="Quiz Details" buttonStyle="secondaryButton" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                        <p style={{color:'#999', width:'100%',textAlign:'center'}}>No quizzes found</p>
                        </>
                    )
                }

            </div>
                <div style={{placeItems: 'center',display:'flex', gap:'1rem',justifyContent:'center' }}>
                    <Link to='/'>
                        <Button buttonText='< Back' buttonStyle='secondaryButton' />
                    </Link>
                    <Button buttonText='Clean History' buttonStyle='dangerButton' buttomFunc={()=>{quizzes&&quizzes.length>0? setPop(!pop):''}}/>
                </div>
        </div>
    )
}
