import React, { useState } from 'react';
import Fab from '@mui/material/Fab';

//icons

import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HelpIcon from '@mui/icons-material/Help';

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
            <Fab
              href="https://www.linkedin.com/in/tomasghilino/"
              target="_blank"
              color="default"
              variant="extended"
              aria-label="github"
            >
              <LinkedInIcon fontSize="large" sx={{ mr: 1 }} />
              <MenuText>LinkedIn</MenuText>
            </Fab>
            <Fab
              href="https://github.com/tomasghilino"
              target="_blank"
              color="default"
              variant="extended"
              aria-label="github"
            >
              <GitHubIcon fontSize="large" sx={{ mr: 1 }} />
              <MenuText>GitHub</MenuText>
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
          {open ? <ExpandMoreIcon /> : <HelpIcon />}
        </MenuIconContainer>
      </MenuContainer>
    </>
  );
};

export default MenuButton;
