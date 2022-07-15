import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* jQuery */}
          {/* <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></Script> */}
          {/* iamport.payment.js  */}
          {/* <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></Script> */}
          <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
