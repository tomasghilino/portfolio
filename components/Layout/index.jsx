import React from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from './LayoutElements';
import MenuButton from '../MenuButton';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <MenuButton />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
