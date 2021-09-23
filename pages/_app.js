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
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
