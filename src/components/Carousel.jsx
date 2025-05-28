import Burbugedon from '/images/Burbugedon.png';
import TLM from '/images/thelastmeow.png';
import Ocaso from '/images/ElOcaso.jpg';
import { Link } from 'react-router';

const proyectos = [
  { item: 'item1', title: 'Visual Transformers', img: Burbugedon, path: '/project/item1' },
  { item: 'item2', title: 'Awakaruna', img: TLM, path: '/project/item2' },
  { item: 'item3', title: 'Laboralmente Joven', img: Ocaso, path: '/project/item3' },
];

const Carousel = () => {
  return (
    <section
      id='proyectos'
      className='flex flex-col items-center justify-center py-10'
    >
      <h1 className='text-6xl font-bold m-10'>Proyectos</h1>
      <div className='carousel rounded-box w-full max-w-7xl'>
        {proyectos.map((item) => (
          <div key={item.item} id={item.item} className='carousel-item w-full'>
            <div className='card w-full shadow-sm'>
              <figure className='px-10 pt-10'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='rounded-xl w-full h-full'
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h2 className='card-title text-5xl'>{item.title}</h2>
                <div className='card-actions'>
                  <button className='btn btn-primary mt-2'>
                    <Link to={item.path}>Entrar</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-full justify-center gap-2 py-2'>
        {proyectos.map((item, index) => (
          <a key={item.item} href={`#${item.item}`} className='btn btn-s'>
            {index + 1}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Carousel;