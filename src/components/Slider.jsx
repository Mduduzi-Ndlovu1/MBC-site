import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = ({ slides }) => {
    console.log(`This is from slider.Jsx ${slides}`)
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >

        <SwiperSlide >
          <img src={slides} alt={`Slide`} className="slide_image" />
        </SwiperSlide>
     
    </Swiper>
  );
};

export default Slider;
