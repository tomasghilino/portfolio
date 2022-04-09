import { styled as styledMUI } from '@mui/material/styles';
import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';

export const MenuContainer = styled.div`
  position: relative;
`;

export const MenuIconContainer = styledMUI(Fab)`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    transform: scale(1.1);
    background-color: var(--pink);

    :hover {
        background-color: var(--darkPink);
      }

    svg{
        color: white;
        font-size: 3.2rem;
    }
    
`;
