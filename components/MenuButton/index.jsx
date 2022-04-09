import React, { useState } from 'react';
import Fab from '@mui/material/Fab';

//icons
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  MenuContainer,
  MenuIconContainer,
  MenuDrop,
  MenuText,
} from './MenuButtonElements';

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <MenuDrop onClick={() => handleClick()}>
          <Fab color="default" variant="extended" aria-label="person">
            <PersonIcon fontSize="large" sx={{ mr: 1 }} />
            <MenuText>¿Quién soy?</MenuText>
          </Fab>
          <Fab color="default" variant="extended" aria-label="github">
            <GitHubIcon fontSize="large" sx={{ mr: 1 }} />
            <MenuText>Mi GitHub</MenuText>
          </Fab>
          <Fab color="default" variant="extended" aria-label="add">
            <WhatsAppIcon fontSize="large" sx={{ mr: 1 }} />
            <MenuText>WhatsApp</MenuText>
          </Fab>
        </MenuDrop>
      )}
      <MenuContainer onClick={() => handleClick()}>
        <MenuIconContainer aria-label="menu" color="info">
          {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </MenuIconContainer>
      </MenuContainer>
    </>
  );
};

export default MenuButton;
