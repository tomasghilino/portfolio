import React, { useState, useEffect } from 'react';

import useWindowDimensions from '../../../hooks/useWindowDimensions';
import CarouselMobile from './CarouselMobile';
import CarouselPC from './CarouselPC';

const Carrousel = () => {
  const { width } = useWindowDimensions();

  const [type, setType] = useState('');
  const handleType = () => {
    width < 768 ? setType('Mobile') : setType('PC');
  };

  useEffect(() => {
    handleType();
  }, [width]);

  return <>{type === 'Mobile' ? <CarouselMobile /> : <CarouselPC />}</>;
};

export default Carrousel;
