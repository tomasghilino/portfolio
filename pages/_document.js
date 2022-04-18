import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta
            name="description"
            content="Portfolio Tomas Ghilino, Web Developer. Argentina."
          />
          <meta
            name="keywords"
            content="tomas ghilino, web developer, portfolio, frontend portfolio, backend portfolio, react js web developer"
          />
          <link rel="icon" href="/favicon.ico" />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
