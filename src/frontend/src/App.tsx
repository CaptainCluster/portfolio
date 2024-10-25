import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Page imports 
import FrontPage  from './pages/FrontPage/FrontPage' 
import Skills     from './pages/Skills'
import Projects   from './pages/Projects'
import Error404   from './pages/Error404'
import AboutMe from './pages/AboutMe/AboutMe'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />}/>
        <Route path="*" element={<Error404 />}/>
        <Route path="about" element={<AboutMe />}/>
        <Route path="skills" element={<Skills />}/>
        <Route path="projects" element={<Projects />}/>
      </Routes>
    </Router>
  )
}

export default App
