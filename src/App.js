import Navbar from './components/Navbar'
import CssBaseline from '@mui/material/CssBaseline';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
        <CssBaseline />
      </Router>
    </>
  );
}

export default App;
