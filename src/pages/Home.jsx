import React, { useEffect, useCallback, useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import data from '../utils/index';
import Slider from '../components/Slider';
import ScrollReveal from 'scrollreveal';
import '../pages/home.css';

import { BsBox } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../components/Slider.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Footer from '../components/Footer';


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
      <section >
        <div className='section__header'>
        <h3 className='section__title reveal'>Featured Products:</h3>
          <div className='button__container reveal'>
            <Button name={"Force Flue"} classname={"btn-clear"} onClick={() => handleFeatureClick('Force Flue')} />
            <Button name={"Natural Flue"} classname={"btn-clear"} onClick={() => handleFeatureClick('Digital')} />
            <Button name={"External"} classname={"btn-clear"} onClick={() => handleFeatureClick('External')} />
          </div>
        </div>

        <div className='section__content'>
          {selectedImage && (
            <>
            <div className='header__img reveal'>
              <img src={selectedImage.imageSrc} alt={selectedImage.name} className='w-full h-[400px] object-contain ' loading="lazy" />
            </div>
            <div className='header__desc reveal'>
              <p className='mb-5'>{selectedImage.desc}</p>
              <Button name={"Learn More"} classname={"btn-clear"} path={'./products'} />
            </div>
            </>
          )}
        </div>
      </section>
          
      <section className="category-section reveal">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {data.categoryImages.map((category) => (
          <SwiperSlide key={category.id} className="category-card reveal">
            <div className="category-card-content">
              <img src={category.imageSrc} alt={category.desc} className="category-image" />
              <p className="category-desc">{category.desc}</p>

              <Button name={"Learn More"} classname={"btn-clear"} path={'./products'} />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <section className='w-full mt-10 flex p-10 gap-8 '>
      <div className="flex-1">
        <article>
          <h2 className='text-2xl font-bold py-5 text-gray-300 reveal'>Explore Our Range of Gas Water Geysers</h2>
          <p className='reveal'>At our company, we have a rich history and a strong commitment to our mission and values. We strive to provide the best products and services to our customers </p>

          <div className='flex py-5'>
            <div>
              <BsBox size={40} className='mb-3 reveal'/>
              <h3 className='font-bold text-xl mb-3 reveal'> Reliable</h3>
              <p className='reveal'>Experience uninterrupted hot water supply with our range of reliable gas water heaters.</p>
            </div>
            <div>
              <BsBox size={40} className='mb-3 reveal'/>
              <h3 className='font-bold text-xl mb-3 reveal'>Efficient</h3>
              <p className='reveal'>Save on evergy bills with our energy effcient Gas water Geysers that provide instant hot water.</p>
            </div>

          </div>
            <div className='flex gap-5 reveal' >
              <Button name={"Learn More"} classname={"btn-clear"} path={'./about'} />

              <Button name={"Request Quote"} classname={"btn"} path={'./products'} />
            </div>
        </article>

      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src="src\assets\logo\logo bg-stuff.jpg" alt="logo" className="image reveal rounded-lg" />
      </div>
    </section>

    <section className="w-full mt-10 flex flex-col md:flex-row p-5 md:p-10 gap-8">
        {/* Left side - Contact Form */}
      <div className="flex-1">
          <h2 className="text-2xl font-bold py-5 text-gray-300 reveal">Contact Us</h2>
          <p className="reveal py-5">
            For any <span className="text-red-500">inquiries</span> or <span className="text-red-500">Quotation</span>, please reach out to us.
          </p>

          <div>
            <form className="space-y-6 reveal">
              <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="w-full">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="w-full">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
      </div>

        {/* Right side - Google Maps */}
      <div className="flex-1">
        <div className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509104!2d144.9537353159047!3d-37.81627977975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1502e3d%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1614480433193!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>


      </main>
      <Footer/>
    </>
  );
});

export default Home;
