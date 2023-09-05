import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props: { __NEXT_DATA__: { locale: any; }; }) {

  const { locale } = props.__NEXT_DATA__;

  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <Html dir={dir} lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNcTmnS323hh7tSQzFdwlnB4EozA3lwcA&libraries=geometry"></script>
      </body>
    </Html>
  )
}
