import { useParams } from 'react-router-dom';
import Conejos from '/images/conejoides.jpg';
import NavBarTwo from './NavBarTwo'; // Asegúrate de que la ruta de importación sea correcta
import Contacto from './Contacto'; // Asegúrate de que la ruta de importación sea correcta

const proyectosInfo = {
  item1: {
    title: 'Visual Transformers',
    sobre:
      'Proyecto de visualización de datos con temática de Transformers G1, visualiza con infográficos información acerca de los habitantes de Cybertron y conoce más de su mundo.',
    infoProyecto: {
      rol: 'Investigación y programación de escena',
      motor: 'Unity',
      lenguaje: 'C#',
    },
    miembros:
      'Emmanuel Echeverri, William Pabón, Sebastián Franco, Samuel Kerguelen, Sofía Henao',
    cartografia:
      'Contribución de la visualización cartográfica del planeta Cybertron, con la interacción de poder mover el planeta y poder seleccionar puntos de interés dentro del planeta con información de la zona.',
    img: Conejos,
  },
  item2: {
    title: 'Awakaruna',
    sobre:
      'Juego basado en el relato Colombiano de la Madre Monte. Con el objetivo de contar la historia en un contexto más contemporáneo, adaptando la historia a un juego de acción en 3ra persona.',
    infoProyecto: {
      rol: 'Desarrollador, programador de enemigos',
      motor: 'Unity',
      lenguaje: 'C#',
    },
    miembros:
      'Emmanuel Echeverri, Juan Camilo Piza, Sebastián Franco, Sofía Silva, Juan José Amaya',
    cartografia:
      'Mi aporte en el proyecto, por fuera de la investigación y planeación del proyecto, fue la de programar los enemigos. Utilizando un sistema sencillo de máquina de estados, los enemigos podían entrar en 3 estados para Idle, Correr y Atacar.',
    img: Conejos,
  },
  item3: {
    title: 'Laboralmente Joven',
    sobre:
      'Proyecto de experiencia VR dirigido a aspirantes a recibir una experiencia similar a una entrevista simple en el entorno virtual.',
    infoProyecto: {
      rol: 'Desarrollador, programador NPC y shader',
      motor: 'Unity',
      lenguaje: 'C#',
    },
    miembros:
      'Emmanuel Echeverri, William Pabón, Sebastián Franco, Juan Camilo Piza, Alejandro',
    cartografia:
      'Mi contribución a la experiencia fue la de poder hacer un NPC que pudiera guiar al jugador cuando este entrara por primera vez al VR, guiándolo a la sala de entrevista, donde estaría el entrevistador. Además de haber colaborado con billboard y shader para tener al NPC grabado de una persona real.',
    img: Conejos,
  },
};

const SobreProyecto = () => {
  const { projectId } = useParams();

  if (!projectId || !proyectosInfo[projectId]) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBarTwo />
        <div className="flex-grow flex justify-center items-center">
          <h1 className="text-4xl text-error">Proyecto no encontrado</h1>
        </div>
        <Contacto />
      </div>
    );
  }

  const project = proyectosInfo[projectId];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBarTwo />
      
      <section id='about-project' className='pt-20 flex-grow'>
        <h1 className='text-8xl flex items-center justify-center text-info'>
          {project.title}
        </h1>
        <div className='divider divider-info'></div>

        {/* Sección About - Coincide con href="#about" */}
        <div id='about' className='hero scroll-mt-20'>
          <div className='hero-content flex-col lg:flex-row'>
            <img
              src={project.img}
              alt={`Imagen del proyecto ${project.title}`}
              className='rounded-lg shadow-2xl w-xs sm:w-xl'
            />
            <div>
              <h1 className='text-6xl font-bold mx-10 my-10 text-warning'>Sobre</h1>
              <p className='mx-10'>{project.sobre}</p>
            </div>
          </div>
        </div>

        {/* Sección Proyectos (Información) - Coincide con href="#proyectos" */}
        <div id='proyectos' className='hero scroll-mt-20'>
          <div className='hero-content flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 mx-10'>
              <h1 className='text-6xl my-10 font-bold text-warning'>Información Proyecto</h1>
              <p className='text-2xl'>
                Rol: {project.infoProyecto.rol} <br />
                Motor: {project.infoProyecto.motor} <br />
                Lenguaje: {project.infoProyecto.lenguaje}
              </p>
            </div>
            <div className='w-full lg:w-1/2 mx-10'>
              <h1 className='text-6xl my-10 font-bold text-warning'>Miembros</h1>
              <p className='text-2xl'>{project.miembros}</p>
            </div>
          </div>
        </div>

        {/* Sección Contacto (Aporte) - Coincide con href="#contacto" */}
        <div id='contacto' className='hero scroll-mt-20'>
          <div className='hero-content flex-col lg:flex-row'>
            <div>
              <h1 className='text-6xl font-bold mx-10 my-2 text-warning'>Cartografía</h1>
              <p className='py-6 text-xl mx-6.5'>{project.cartografia}</p>
            </div>
            <img
              src={project.img}
              alt={`Cartografía del proyecto ${project.title}`}
              className='rounded-lg shadow-2xl w-xs sm:w-xl'
            />
          </div>
        </div>
      </section>

      <Contacto />
    </div>
  );
};

export default SobreProyecto;