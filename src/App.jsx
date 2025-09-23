import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
