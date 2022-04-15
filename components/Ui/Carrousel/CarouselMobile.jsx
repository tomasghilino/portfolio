import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import ProjectCard from '../ProjectCard';
const CarouselMobile = () => {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, EffectCube, Pagination]}
    >
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselMobile;
