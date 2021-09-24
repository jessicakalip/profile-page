import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/Global";
import Head from "next/head";

import theme from "../styles/config/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Codystar&family=Zilla+Slab+Highlight:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
        />
        <meta name="description" content="Jessica Kalip Profile Page" />
        <meta name="title" property="og:title" content="Jessica Kalip" />
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/51510644505_659124e6e2_k.jpg"
        />
        <meta
          name="description"
          property="og:description"
          content="Jessica Kalip Profile Page"
        />
        <meta name="author" content="Jessica Kalip" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
