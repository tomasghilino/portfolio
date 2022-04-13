import React from 'react';
import Image from 'next/image';

import { GridImageWrapper } from './GridCardElements';

const GridCard = ({ src, title }) => {
  return (
    <GridImageWrapper>
      <Image
        src={src}
        width={500}
        height={500}
        objectFit="contain"
        layout="responsive"
      />
      <p>{title}</p>
    </GridImageWrapper>
  );
};

export default GridCard;
