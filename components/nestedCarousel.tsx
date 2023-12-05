import React, { useState, ReactElement } from 'react';
import {
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
} from '@heroicons/react/20/solid';

interface NestedCarouselProps {
  children: ReactElement[] | ReactElement;
}

const NestedCarousel: React.FC<NestedCarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="nested-carousel-container relative">
      <button
        onClick={goToPrevious}
        className="absolute left-0 z-10 p-4 text-gray-500 bg-white rounded-full shadow focus:outline-none"
        style={{ top: '50%', transform: 'translateY(-50%)' }} // Ajustează această parte dacă e necesar
      >
        <ArrowDownLeftIcon className="h-6 w-6" />
      </button>

      <div className="carousel-content">
        {React.Children.map(children, (child, index) => {
          return index === activeIndex ? child : null;
        })}
      </div>

      <button
        onClick={goToNext}
        className="absolute right-0 z-10 p-4 text-gray-500 bg-white rounded-full shadow focus:outline-none"
        style={{ top: '50%', transform: 'translateY(-50%)' }} // Ajustează această parte dacă e necesar
      >
        <ArrowDownRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default NestedCarousel;
