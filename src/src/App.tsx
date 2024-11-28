/**
 * Using HashRouter so that the GitHub pages deployment works as intended
 */
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

// Page imports 
import FrontPage  from './pages/FrontPage/FrontPage' 
import Skills     from './pages/Skills/Skills'
import Projects   from './pages/Projects/Projects'
import Error404   from './pages/Error404'
import AboutMe    from './pages/AboutMe/AboutMe'
import Experience from './pages/Experience/Experience'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"           element={<FrontPage />}/>
        <Route path="*"           element={<Error404 />}/>
        <Route path="about"       element={<AboutMe />}/>
        <Route path="skills"      element={<Skills />}/>
        <Route path="projects"    element={<Projects />}/>
        <Route path="experience"  element={<Experience />}/>
      </Routes>
    </Router>
  )
}

export default App
