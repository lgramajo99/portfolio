import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/layout/sidebar/Sidebar';
import Footer from './components/layout/footer/Footer';
import Frame from './components/layout/frame/Frame';

import About from './page/About';
import AcademicTraining from './page/AcademicTraining';
import ContactMe from './page/ContactMe';
import Error from './page/Error';
import Portfolio from './page/Portfolio';
import Project from './page/Project';
import Skills from './page/Skills';
import WorkExp from './page/WorkExp';

function App() {
  return (
    <main className='viwer'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Frame />} >
          <Route index element={<About />} />
          <Route path='proyectos' element={<Project />} />
          <Route path='formacion-academica' element={<AcademicTraining />} />
          <Route path='contactame' element={<ContactMe />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='habilidades' element={<Skills />} />
          <Route path='experiencia-laboral' element={<WorkExp />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
