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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
