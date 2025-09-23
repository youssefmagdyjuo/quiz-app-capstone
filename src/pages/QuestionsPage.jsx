import QuestionCard from '../components/QuestionCard'
import React from 'react'
import mockQuestions from "../services/mockQuestions";
import { fetchQuestions } from '../services/QuestionsService'
import { useEffect } from 'react'
import { useQuestionStore } from '../store/Q_Store'
export default function QuestionsPage() {
    // Access questions and setQuestions from the Zustand store
    const {questions, setQuestions } = useQuestionStore();
    // Fetch questions by fetchQuestions function from QuestionsService and set them in the store
    // useEffect(() => {
    //     async function loadQuestions() {
    //         try {
    //             const data = await fetchQuestions();
    //             // Add a status field to each question
    //             const formattedQuestions = data.results.map((question) => ({
    //                 ...question,
    //                 status: 'unanswered',
    //                 userAnswer: null
    //             }));
    //             // Update the store with the formatted questions
    //             setQuestions(formattedQuestions);
    //             useQuestionStore.setState({
    //             currentQuestion: formattedQuestions[0] || null,
    //             currentQuestionIndex: 0
    //             });

    //         } catch (error) {
    //             console.error("Failed to fetch questions:", error);
    //         }
    //     }
    //     loadQuestions(); 
    // }, [setQuestions]);
useEffect(() => {
    setQuestions(mockQuestions);
}, [setQuestions]);
    console.log(questions);

    return (
        <div>
        <QuestionCard />
        </div>
    )
}
