import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import data from '../utils/index';
import Slider from '../components/Slider';

const Home = () => {
  const slides = data.frontImgs.map((slide) => slide.imageSrc);

  return (
    <>
      <header className="home_header">
        <Navbar />
        <div className="w-full flex justify-center text-center items-center mt-8">
          <div className="w-[90%]">
            <h1 className="text-4xl font-semibold leading-[3.5rem] mb-4 text-gray-300">
              Providing Reliable Gas Water Heaters for Every Purpose
            </h1>
            <p className="text-lg font-semibold text-gray-300 mb-8">
              Experience The convenience and efficiency of our high-quality <span className="text-red-500">Gas Water Heaters</span>. Say Goodbye to old and Hello to the new
            </p>
            <div className="flex justify-center gap-5">
              <Button name={"Learn More"} path={'./about'} classname={"btn-clear"} />
              <Button name={"Request Quote"} path={'./contact'} classname={"btn"} />
            </div>
          </div>
        </div>
        <Slider slides={slides} />
      </header>
    </>
  );
}

export default Home;
