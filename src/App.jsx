import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ResultePage from './pages/ResultePage'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/quiz/resulte' element={<ResultePage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
