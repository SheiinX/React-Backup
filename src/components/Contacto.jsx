import {
  FaLinkedin,
  FaItchIo,
  FaGithubSquare,
  FaTwitter,
} from 'react-icons/fa';

const Contacto = () => {
  return (
    <section id='contacto'>
      <footer className='footer footer-horizontal footer-center bg-primary text-primary-content p-10'>
        <aside>
          <p className='font-bold'>
            Sebastián Franco Cataño
            <br />
            Ingeniero en Diseño de Entretenimiento Digital y desarrollador de experiencias interactivas
          </p>
        </aside>
        <nav>
          <div className='grid grid-flow-col text-3xl gap-4'>
            <a href='https://x.com/Alafresh1' target='_blank'>
              <FaTwitter />
            </a>
            <a href='https://github.com/Alafresh' target='_blank'>
              <FaGithubSquare />
            </a>
            <a href='https://a-la-fresh.itch.io/' target='_blank'>
              <FaItchIo />
            </a>
            <a href='https://www.linkedin.com/in/juangcc/' target='_blank'>
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </footer>
    </section>
  );
};

export default Contacto;
