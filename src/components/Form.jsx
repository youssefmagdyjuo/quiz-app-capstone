import React, { useEffect, useState } from 'react'
import Select from './select';
import Button from './Button';
import { useOpenForm } from '../store/Q_Store';
import { Link } from 'react-router-dom';
import { fetchQuestions ,fetchCategories,difficultyLevels} from '../services/QuestionsService'
import { useQuestionStore } from '../store/Q_Store'
export default function Form({isVisible}) {
    const [categories,setCategories]=useState([]);
    useEffect(() => {
    async function loadCategories() {
        const data = await fetchCategories();
        setCategories(data)
    }
    loadCategories();
    }, []);
    const styles = `formContainerPage ${isVisible ? 'desplay' : ''}`;
    const {toggleVisible,difficulty,category} = useOpenForm();
    const {setQuestions,resetScore} = useQuestionStore();
    // Fetch questions by fetchQuestions function from QuestionsService and set them in the store
        async function loadQuestions() {
            resetScore()
            try {
                const data = await fetchQuestions(category,difficulty);
                // Add a status field to each question
                const formattedQuestions = data.results.map((question) => ({
                    ...question,
                    status: 'unanswered',
                    userAnswer: 'No Answer'
                }));
                // Update the store with the formatted questions
                setQuestions(formattedQuestions);
                useQuestionStore.setState({
                currentQuestion: formattedQuestions[0] || null,
                currentQuestionIndex: 0
                });
            } catch (error) {
                console.error("Failed to fetch questions:", error);
            }
        }
        


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
                <Select options={categories} title="Category"/>
                <Select options={difficultyLevels} title="Difficulty"/>
                <Link to='/quiz'>
                    <Button  
                    buttonStyle='primaryButton' 
                    buttonText='Start Quiz' 
                    buttomFunc={()=>{
                        // call function to fetch questions
                        loadQuestions()
                        // close the form
                        toggleVisible()
                        }}/>
                </Link>
            </div>
        </div>
        </div>
    )
}
