import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            {/* Paste the first GTM script here */}
            <script
              async
              src={`https://www.googletagmanager.com/gtm.js?id=GTM-P4H2DP77`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-P4H2DP77');`,
              }}
            />
            {/* End first GTM script */}
          </Head>
          <body>
            {/* Paste the second GTM script here */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-P4H2DP77"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
            {/* End second GTM script */}
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  