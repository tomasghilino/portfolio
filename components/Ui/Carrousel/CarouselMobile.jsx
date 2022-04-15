import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import ProjectCard from '../ProjectCard';
import useProjects from '../../../hooks/useProjects';

const CarouselMobile = () => {
  const { loading, data } = useProjects();
  if (loading) return;

  const Projects = data.allProyectos;
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

export default CarouselMobile;
