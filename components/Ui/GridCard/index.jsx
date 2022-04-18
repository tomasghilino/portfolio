import React from 'react';
import ExportedImage from 'next-image-export-optimizer';

import { GridImageWrapper } from './GridCardElements';

const GridCard = ({ src, title }) => {
  return (
    <GridImageWrapper>
      <ExportedImage
        src={src}
        width={500}
        height={500}
        objectFit="contain"
        layout="responsive"
        alt="item grid"
      />
      <p>{title}</p>
    </GridImageWrapper>
  );
};

export default GridCard;
