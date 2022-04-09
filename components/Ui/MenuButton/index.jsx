import React, { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuContainer, MenuIconContainer } from './MenuButtonElements';

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <MenuContainer onClick={() => handleClick()}>
      <MenuIconContainer aria-label="menu" color="info">
        {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </MenuIconContainer>
    </MenuContainer>
  );
};

export default MenuButton;
