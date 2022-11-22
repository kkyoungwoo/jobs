import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Work+Sans:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'ko'}, 'google_translate_element');
            }`
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
