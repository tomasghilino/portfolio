import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

const MenuButton = () => {
  return (
    <div>
      <IconButton aria-label="delete" color="secondary">
        <ExpandLessIcon />
      </IconButton>
    </div>
  );
};

export default MenuButton;
