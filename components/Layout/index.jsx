import React from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from './LayoutElements';
import Menu from '../Menu';

const Layout = (props) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Menu />
      {props.children}
    </>
  );
};

export default Layout;
