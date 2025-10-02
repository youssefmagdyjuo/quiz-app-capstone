import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ResultePage from './pages/ResultePage'
import { useMode } from './store/Q_Store'
import QuizDetails from './pages/quizDetails'
import History from './pages/History'
function App() {
const {lightMode}=useMode()
    if(lightMode){
        document.querySelector('body').classList.add('ligthMode')
    }
    else{
        document.querySelector('body').classList.remove('ligthMode')
    }
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/history/quizDetails/:id' element={<QuizDetails/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/quiz/resulte' element={<ResultePage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
