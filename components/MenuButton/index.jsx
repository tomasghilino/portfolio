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

import { motion, AnimatePresence } from 'framer-motion';

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <AnimatePresence>
        {open && (
          <MenuDrop
            as={motion.div}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, type: 'spring' }}
            exit={{ opacity: 0, y: 300 }}
            onClick={() => handleClick()}
          >
            <Fab color="default" variant="extended" aria-label="person">
              <PersonIcon fontSize="large" sx={{ mr: 1 }} />
              <MenuText>About Me</MenuText>
            </Fab>
            <Fab
              href="https://github.com/tomasghilino"
              target="_blank"
              color="default"
              variant="extended"
              aria-label="github"
            >
              <GitHubIcon fontSize="large" sx={{ mr: 1 }} />
              <MenuText>My GitHub</MenuText>
            </Fab>
            <Fab
              href="https://wa.me/5491153297562"
              target="_blank"
              color="default"
              variant="extended"
              aria-label="add"
            >
              <WhatsAppIcon fontSize="large" sx={{ mr: 1 }} />
              <MenuText>WhatsApp</MenuText>
            </Fab>
          </MenuDrop>
        )}
      </AnimatePresence>

      <MenuContainer onClick={() => handleClick()}>
        <MenuIconContainer aria-label="menu" color="info">
          {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </MenuIconContainer>
      </MenuContainer>
    </>
  );
};

export default MenuButton;
