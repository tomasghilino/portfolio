import { css } from '@emotion/react';

export const GlobalStyles = css`
  :root {
    --bright: #349bcf;
    --semiBright: #189de4;
    --primary: #146ca4;
    --dark: #242444;
    --semiDark: #46648c;
    --pink: #9d32cf;
    --darkPink: #53196e;
    --gray: #515151;
    --violet: #2f0da1;
    --yellow: #cbe025;
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
    background-color: var(--bright);
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

  // SCROLLBAR STYLES
  /* width */
  ::-webkit-scrollbar {
    width: 8px;

    transition: all 0.2s ease-in-out;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #031e2a;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--darkPink);
    height: 100px;
    border-radius: 1rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--pink);
  }
`;
