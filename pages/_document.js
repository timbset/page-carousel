import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html manifest={'/static/manifest.appcache'}>
        <Head>
          <style>{`body { margin: 0 }`}</style>
        </Head>
        <body className="custom_class">
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
