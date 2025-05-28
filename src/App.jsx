import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import ProjectOne from './pages/ProjectOne';
import SobreProyecto from './components/SobreProyecto';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<IntroPage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path="/project/:projectId" element={<SobreProyecto />} />
    </Routes>
  );
}

export default App;
