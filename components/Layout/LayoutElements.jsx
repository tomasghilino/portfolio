import { css } from '@emotion/react';

export const GlobalStyles = css`
  :root {
    --bright: #52b7e9;
    --semiBright: #189de4;
    --primary: #146ca4;
    --dark: #242444;
    --semiDark: #46648c;
    --pink: #9d32cf;
    --darkPink: #53196e;
    --gray: #515151;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px = 1rem */
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    background-color: var(--dark);
    margin: 0;
    padding: 0;
    h1,
    h2,
    h3,
    p {
      margin: 0;
      font-family: 'Roboto', sans-serif;
    }
  }
`;
