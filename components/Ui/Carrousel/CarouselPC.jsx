import React from 'react';
import ProjectCard from '../ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { css } from '@emotion/react';
import useProjects from '../../../hooks/useProjects';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

const CarouselPC = () => {
  const { loading, data } = useProjects();
  if (loading) return;

  const Projects = data.allProyectos;

  return (
    <Swiper
      effect={'coverflow'}
      initialSlide={1}
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
      {Projects.map((Project) => (
        <SwiperSlide key={Project.id}>
          <ProjectCard
            imageSrc={Project.imagen.responsiveImage.webpSrcSet}
            title={Project.titulo}
            codeLink={Project.linkgithub}
            demoLink={Project.linkdemo}
            description={Project.descripcion}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselPC;
