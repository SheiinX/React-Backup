import { Link } from 'react-router';

const IntroPage = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Portafolio</h1>
          <p className='py-6'>
            Proyecto de portafolio centrado en el desarrollo de software y
            experiencias
          </p>
          <button className='btn btn-primary'>
            <Link to='/Home'>Entrar</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
