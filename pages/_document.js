import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Work+Sans:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'ko'}, 'google_translate_element');
            }`
          }}
         async />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
