import { useState } from 'react';
import NavBarTwo from '../components/NavBarTwo';
import SobreProyecto from '../components/SobreProyecto';
import CarouselProyectos from '../components/CarouselProyectos';

const ProjectOne = () => {
  const [currentProject, setCurrentProject] = useState('project1');

  return (
    <>
      <NavBarTwo />
      <SobreProyecto project={currentProject} />
      <CarouselProyectos/>
    </>
  );
};

export default ProjectOne;