import React from 'react';
import { Link } from 'react-router-dom';
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
      spaceBetween={5}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
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
          <Link to={"/products"}>
            <img src={slide} alt={`Slide ${index + 1}`} className="slide_image " />

          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
