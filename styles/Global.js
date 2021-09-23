import { createGlobalStyle } from "styled-components";
import preflightCSS from "./Preflight";

const GlobalStyle = createGlobalStyle`
    ${preflightCSS}
    
    html, body {
        height: 100%;
        scroll-behavior: smooth;
    }
        
    html {
        box-sizing: border-box;
    }

    body {
        font-family: 'Courier New', Courier, monospace;
        overflow-x: hidden;
        font-weight: 400;
        line-height: 1.6;
        font-size: 16px;
        margin: 0px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Bebas Neue', cursive;
    }

    p {
        color: #333333;
    }
`;

export default GlobalStyle;
