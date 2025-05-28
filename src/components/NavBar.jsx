import { Link } from 'react-router';

const NavBar = () => {
  return (
    <section>
      <div className='navbar bg-neutral shadow-sm fixed top-0 left-0 w-full z-50'>
        <div className='navbar-start'>
          <button className='btn btn-outline btn-warning mx-5'>
            <Link to='/'>Portafolio</Link>
          </button>
        </div>
        <div className='navbar-end'>
          <div className='dropdown dropdown-center'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-50 mt-3 w-52 p-2 shadow'
            >
              <li>
                <a href='#about' className='text-xl hover:bg-neutral-focus'>
                  Sobre Mi
                </a>
              </li>
              <li>
                <a href='#proyectos' className='text-xl hover:bg-neutral-focus'>
                  Proyectos
                </a>
              </li>
              <li>
                <a href='#contacto' className='text-xl hover:bg-neutral-focus'>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='navbar-end hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <button className='btn btn-outline mx-3'>
                <a href='#about'>Sobre Mi</a>
              </button>
            </li>
            <li>
              <button className='btn btn-outline mx-3'>
                <a href='#proyectos'>Proyectos</a>
              </button>
            </li>
            <li>
              <button className='btn btn-outline mx-3'>
                <a href='#contacto'>Contacto</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;