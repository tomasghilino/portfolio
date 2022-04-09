import React from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from './LayoutElements';
import MenuButton from '../MenuButton';

const Layout = (props) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <MenuButton />
      {props.children}
    </>
  );
};

export default Layout;
