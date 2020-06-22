import Document, { Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
          <meta name="apple-mobile-web-app-title" content="NEXT-TEMPLATE"></meta>
          <meta name="format-detection" content="telephone=no" />
          <link rel="apple-touch-icon" href="img/ico_152x152.png"></link>
          <link rel="manifest" href="manifest.json"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="script.js"></script>
        </body>
      </html>
    );
  }
}
