import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = memo(({ slides = [] }) => {
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
      autoplay={{ 
        delay: 3000, 
        disableOnInteraction: false 
      }}
      speed={2000} // Adjusted for smoother transitions
      loop={true}
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
          <img 
            src={slide} 
            alt={`Slide ${index + 1}`} 
            className="slide_image" 
            loading="lazy" // Lazy load images
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default Slider;
