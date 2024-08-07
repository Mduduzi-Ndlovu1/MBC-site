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
      slidesPerView={1} // Default to 1 slide per view
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
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
