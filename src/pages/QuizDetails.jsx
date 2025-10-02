import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuestionStore } from '../store/Q_Store'
import AnswersReview from '../components/AnswersReview'
import Button from '../components/Button'
export default function QuizDetails() {
    const {quizzes}=useQuestionStore()
    const {id}=useParams()
    return (
        <div>
        <AnswersReview questions={quizzes[id].quizDetails}/>
            <Link to='/history'>
                <div style={{margin:'1rem',placeItems:'center'}}>
                <Button buttonText='< Back' buttonStyle='secondaryButton'/>
                </div>
            </Link>
        </div>
    )
}
