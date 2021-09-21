import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/Global'

const theme = {
    colors: { /* ... */ },
    screens: {
        xs: '640px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
    },
    radii: {
        md: '8px',
        mx: '9999px'
    },
}

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />

            <GlobalStyle />
        </ThemeProvider>
    )
}