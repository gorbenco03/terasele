import React, { useState } from 'react';
import {
  CameraIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';

interface CarouselItem {
  imageSrc: string;
  text: string;
  caption?: string;
}

interface CarouselWithTextProps {
  items: CarouselItem[];
}

const CarouselWithText: React.FC<CarouselWithTextProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (newIndex: number) => {
    setActiveIndex(newIndex);
  };
  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-1 ">
            {items.map((item, index) => (
              <figure
                key={index}
                className={`${
                  index === activeIndex ? 'block' : 'hidden'
                } mx-auto lg:max-w-none `}
                style={{ width: '70%' }}
              >
                {item.caption && (
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">{item.caption}</span>
                  </figcaption>
                )}
                <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={item.imageSrc}
                    alt={`Slide ${index}`}
                  />
                </div>
              </figure>
            ))}
            <button
              onClick={goToPrevious}
              className="absolute left-0 z-10 p-2 text-gray-500 bg-white rounded-full shadow focus:outline-none"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            {/* Carousel images and indicators go here */}
            <button
              onClick={goToNext}
              className="absolute right-0 z-10 p-2 text-gray-500 bg-white rounded-full shadow focus:outline-none"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-4">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleChange(index)}
                  className={`h-3 w-3 mx-2 rounded-full ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none lg:col-start-1">
              <p>{items[activeIndex].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithText;
