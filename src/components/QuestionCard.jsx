import React from 'react'
import Button from './Button'
import { useQuestionStore } from '../store/Q_Store'
import { Link } from 'react-router-dom';
import Loader from './Loader';
export default function QuestionCard() {
    const {score,decrementScore,incrementScore,updateQuestionStatus,incrementIndex,decrementIndex,getCurrentQuestion,currentQuestionIndex,setCurrentQuestionIndex,questions} = useQuestionStore();
    if (!getCurrentQuestion()) {
        return (
            <Loader/>
        ) 
            
    }
    const options =getCurrentQuestion().options
    // handle option style on click
    function handelClickOption(event,userAnswer){
        if(getCurrentQuestion().status=='unanswered'){
            console.log(getCurrentQuestion().status)
            if(userAnswer==getCurrentQuestion().correct_answer){
                //update question date in store
                updateQuestionStatus(currentQuestionIndex,'correct',userAnswer)
                //upsate user score +1
                incrementScore()
            }else updateQuestionStatus(currentQuestionIndex,'wrong',userAnswer)
        }else if(getCurrentQuestion().status=='correct'&&getCurrentQuestion().userAnswer!=userAnswer){
            //update question date in store
            updateQuestionStatus(currentQuestionIndex,'wrong',userAnswer)
            //upsate user score -1
            decrementScore()
        }else if(getCurrentQuestion().status=='wrong'){
            if(userAnswer==getCurrentQuestion().correct_answer){
                //update question date in store
                updateQuestionStatus(currentQuestionIndex,'correct',userAnswer)
                //upsate user score +1
                incrementScore()
            }else updateQuestionStatus(currentQuestionIndex,'wrong',userAnswer)
        }
                    }
                    console.log(score)
    return (
        <div>
        <p className='uperTitle'>
            {`${getCurrentQuestion().category} || ${getCurrentQuestion().difficulty}`}
        </p>
        <div className="questionContainer container">
            {/* question */}
            <div className="questionBox">
                <h2 className='questionText'>{getCurrentQuestion().question}</h2>
            </div>
            {/* options */}
            <div className="optionsContainer">
                {
                    options.map((option, index) => (
                    //option 
                        <div key={index} 
                        className="option"
                        style={{ border : option==getCurrentQuestion().userAnswer?'solid 1px #4caf50':''}}
                        // inline style for selected option
                        onClick={(event)=>
                            handelClickOption(event,option)
                        }
                        >
                            <span
                            style={{ background : option==getCurrentQuestion().userAnswer?'linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)':''}}
                            >
                                {index==0?'a':index==1?'b':index==2?'c':index==3?'d':''}
                            </span>
                            <h3>{option}</h3>
                        </div>
                    ))
                }
            </div>
            {/* move bar */}
            <div className="moveBar">
                <div className='moveButtons'>
                    <button 
                    onClick={()=>{
                    setCurrentQuestionIndex(0);
                }}
                className='btnNav'>{"<<"}</button>
                <Button 
                buttomFunc={decrementIndex} 
                buttonStyle='secondaryButton' 
                buttonText='< Previous'
                />
                </div>
                {/* Question Number  */}
                <div className="questionNumber_Container">
                    <div className='questionNumber'>{`${currentQuestionIndex+1}/${questions.length}`}</div>
                </div>
                <div className='moveButtons'>
                    {
                        currentQuestionIndex==questions.length - 1
                        ?(
                            <>
                            <Link to={'/quiz/resulte'}>
                                <Button 
                                // buttomFunc={()=>{alert('finish')}} 
                                buttonStyle='praimryButton' 
                                buttonText='Finish'
                                />
                            </Link>
                            </>
                        ):(
                            <>
                                <Button 
                                buttomFunc={incrementIndex} 
                                buttonStyle='praimryButton' 
                                buttonText='Next >'
                                />
                            </>
                        )
                    }


                    <button 
                    onClick={()=>{
                        setCurrentQuestionIndex(questions.length - 1);
                    }}
                    className='btnNav'>{">>"}</button>
                </div>
            </div>
        </div>
        </div>
    )
}

