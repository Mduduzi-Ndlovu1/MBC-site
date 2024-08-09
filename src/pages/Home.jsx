import React, { useEffect, useCallback, useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import data from '../utils/index';
import Slider from '../components/Slider';
import ScrollReveal from 'scrollreveal';


const Home = React.memo(() => {
  const [selectedFeature, setSelectedFeature] = useState('Digital');

  const handleFeatureClick = (featureName) => {
    setSelectedFeature(featureName);
  };

  const selectedImage = data.headerImgs.find((img) => img.name === selectedFeature);




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
      <section className='mx-4 gap-7 flex-row mt-10'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-9 reveal border-b-2 border-y-silver'>
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Featured Products:</h3>
          <div className='mt-4 md:mt-0 flex flex-wrap gap-4 md:gap-6 mb-7'>
            <Button name={"Force Flue"} classname={"btn-clear"} onClick={() => handleFeatureClick('Force Flue')} />
            <Button name={"Natural Flue"} classname={"btn-clear"} onClick={() => handleFeatureClick('Digital')} />
            <Button name={"External"} classname={"btn-clear"} onClick={() => handleFeatureClick('External')} />
          </div>
        </div>

        <div className='mt-10 flex justify-evenly items-center gap-9'>
          {selectedImage && (
            <>
            <div className=''>
              <img src={selectedImage.imageSrc} alt={selectedImage.name} className='w-full h-[400px] object-contain ' loading="lazy" />
            </div>
            <div className='px-10'>
              <p className='mb-5'>{selectedImage.desc}</p>
              <Button name={"Natural Flue"} classname={"btn-clear"} path={'./products'} />
            </div>
            </>
          )}
        </div>
      </section>

      <section>
        
      </section>
      </main>
    </>
  );
});

export default Home;
