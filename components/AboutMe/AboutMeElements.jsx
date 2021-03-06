import styled from '@emotion/styled';
import ExportedImage from 'next-image-export-optimizer';

export const AboutMeContainer = styled.div`
  background-color: var(--dark);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutMeItems = styled.div`
  padding: 2rem;
  transform: scale(0.9);
  @media (min-width: 970px) {
    margin: auto 10rem;
  }
`;

export const AboutMeItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutMeTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const AboutMeText = styled.p`
  color: white;
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 2rem;

  span {
    color: var(--yellow);
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Img = styled(ExportedImage)`
  border-radius: 50%;
  box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  -webkit-box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  -moz-box-shadow: -6px 12px 14px -7px rgba(190, 7, 204, 0.43);
  transform: scale(0.8);
`;
