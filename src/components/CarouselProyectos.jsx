import { useState } from 'react';

import Burbugedon from '/images/Burbugedon.png';
import TLM from '/images/thelastmeow.png';
import Ocaso from '/images/ElOcaso.jpg';
import Bunny from '/images/Bunny.jpg';

const slides = [
  { id: 'slide1', img: Ocaso },
  { id: 'slide2', img: Burbugedon },
  { id: 'slide3', img: TLM },
  { id: 'slide4', img: Bunny },
];

const CarouselProyectos = ({ initialSlide = 'slide1', onSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  // Buscar índice del slide actual
  const currentIndex = slides.findIndex((s) => s.id === currentSlide);

  // Función para cambiar slide, con ciclo
  const goToSlide = (id) => {
    setCurrentSlide(id);
    if (onSlideChange) onSlideChange(id);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(slides[prevIndex].id);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(slides[nextIndex].id);
  };

  return (
    <section className='flex flex-col items-center justify-center py-10'>
      <h1 className='mb-10 text-6xl text-warning'>Imagenes</h1>
      <div className='carousel rounded-box w-xs sm:w-xl relative'>
        {slides.map(({ id, img }, i) => (
          <div
            key={id}
            className={`carousel-item w-full absolute transition-opacity duration-500 ${
              currentSlide === id ? 'opacity-100 relative' : 'opacity-0'
            }`}
          >
            <img src={img} className='w-full' alt={`Slide ${i + 1}`} />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className='btn btn-circle absolute left-5 top-1/2 transform -translate-y-1/2'
          aria-label='Previous slide'
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className='btn btn-circle absolute right-5 top-1/2 transform -translate-y-1/2'
          aria-label='Next slide'
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default CarouselProyectos;
