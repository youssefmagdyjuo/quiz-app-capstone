import AnswersReview from '../components/AnswersReview'
import QuizResulte from '../components/QuizResulte'
import React from 'react'
import { useQuestionStore } from '../store/Q_Store'
export default function ResultePage() {
        const {questions} = useQuestionStore()
    return (
        <div>
        <QuizResulte/>
        <AnswersReview questions={questions}/>
        </div>
    )
}
