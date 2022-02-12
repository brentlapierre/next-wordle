import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps (context: any) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render () {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
