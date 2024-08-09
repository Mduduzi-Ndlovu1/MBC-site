import React, { useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import data from '../utils/index';
import Slider from '../components/Slider';
import ScrollReveal from 'scrollreveal';

const Home = React.memo(() => {
  const slides = data.frontImgs.map((slide) => slide.imageSrc);

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200,
      reset: false,
    });
  }, []);

  const renderSlides = useCallback(() => {
    return <Slider slides={slides} />;
  }, [slides]);

  return (
    <>
      <header className="home_header">
        <Navbar />
        <div className="w-full flex justify-center text-center items-center mt-8 reveal">
          <div className="w-[90%]">
            <h1 className="text-4xl font-semibold leading-[3.5rem] mb-4 text-gray-300 reveal">
              Providing Reliable Gas Water Heaters for Every Purpose
            </h1>
            <p className="text-lg font-semibold text-gray-300 mb-8 reveal">
              Experience the convenience and efficiency of our high-quality <span className="text-red-500">Gas Water Heaters</span>. Say goodbye to the old and hello to the new.
            </p>
            <div className="flex justify-center gap-5 reveal">
              <Button name={"Learn More"} path={'./about'} classname={"btn-clear"} />
              <Button name={"Request Quote"} path={'./contact'} classname={"btn"} />
            </div>
          </div>
        </div>
        <div className="reveal">
          {renderSlides()}
        </div>
      </header>

      <main>
        <section className='flex mx-4 gap-7 flex-row'>
          <div className=''>
            <h3>Explore Our Range of Gas Water Heaters</h3>
          </div>
          <div className=''></div>
        </section>
      </main>
    </>
  );
});

export default Home;
