import React from 'react';
import ProjectCard from '../ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { css } from '@emotion/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

const CarouselPC = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      css={css`
        max-width: 1050px;
      `}
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
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselPC;
