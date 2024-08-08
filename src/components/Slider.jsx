import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = ({ slides = [] }) => {
  if (!slides.length) {
    return <div>No slides available</div>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={2} // Default to 2 slides per view
      navigation
      pagination={{ clickable: true }}
      autoplay={{ 
        delay: 1000, 
        disableOnInteraction: false 
      }}
      speed={4000}
      loop={true} // Enable looping
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      className='mt-8'
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide} alt={`Slide ${index + 1}`} className="slide_image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
