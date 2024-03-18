import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './page/Error';
import Sidebar from './components/layout/sidebar/Sidebar';
import Footer from './components/layout/footer/Footer';
import Frame from './components/layout/frame/Frame';
import About from './page/About';
import Project from './page/Project';

function App() {
  return (
    <main className='viwer'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Frame />} >
          <Route index element={<About />} />
          <Route path='proyectos' element={<Project />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
