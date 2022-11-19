import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";
import Script from "next/script";
import { ReactElement } from "react";
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): ReactElement {
    return (
      <Html>
        <title>Coding Courses in Malayalam| Dialect India</title>
        <Head>
          <link rel="shortcut icon" href="/icons/favic.png" />
          <meta
            name="description"
            content=" Learn coding courses in Malayalam with guaranteed placements. Get programming expertise from expert professionals.  "
          ></meta>
          <meta
            name="keywords"
            content="Python course in Malayalam, Python online course in Malayalam, python training in malayalam, python malayalam online courses, learn python in malayalam, python online training in malayalam, python malayalam online certifications, python programming course in malayalam
coding courses in malayalam, flutter course in Malayalam, flutter online course in Malayalam, flutter training in malayalam, flutter malayalam online courses, learn flutter in malayalam, flutter online training in malayalam, flutter malayalam online certifications, react js course in Malayalam, react js online course in Malayalam, react js training in malayalam, react js malayalam online courses, learn react js in malayalam, react js online training in malayalam, react js malayalam online certifications"
          ></meta>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-2DH42TRLNP"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-2DH42TRLNP');
        `}
          </Script>
          <Script
            strategy="afterInteractive"
            id="trackingcode2"
            dangerouslySetInnerHTML={{
              __html: `
              window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', 'ffa8e84c0c407de203559a7a02dea78e6401ff4f', { region: 'eu' });
              `,
            }}
          ></Script>
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
