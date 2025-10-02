import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useQuestionStore } from '../store/Q_Store'
export default function History() {
    const {quizzes}= useQuestionStore();
    console.log(quizzes)
    return (
        <>
        <div className='historyContainer'>
        {quizzes.map((quiz,index)=>(
            <div className=' QuizContainer' style={{background:quiz.quizScore>50?" var(--mix-bg1)":'var(--mix-bg2)'}}>
                <div className='Quiz'>
                    <h2 className='text-center mb-4 text-xl'>{quiz.quizCategory}</h2> 
                    <div className='QuizDetails'>
                    <p>Number of questions</p>
                    <div>{quiz.quizNumberOfQuestions}</div>
                    <p>Difficulty</p>
                    <div>{quiz.quizDifficulty}</div>
                    <p>Score</p>
                    <div 
                    className={quiz.quizScore>50?'coloredText1':'coloredText2'}
                    >{`${Math.round(quiz.quizScore/quiz.quizNumberOfQuestions*100)}%`}</div>
                    </div> 
                    <Link to={`/history/quizDetails/${index}`}>
                    <div style={{marginTop:'1rem',placeItems:'center'}}>
                        <Button buttonText='Quiz Details' buttonStyle='secondaryButton'/>
                    </div>
                    </Link>
            </div>
        </div>
        ))}
        </div>
                    <Link to='/'>
                        <div style={{margin:'1rem',placeItems:'center'}}>
                        <Button buttonText='< Back' buttonStyle='secondaryButton'/>
                        </div>
                    </Link>
        </>
    )
}
