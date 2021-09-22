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
        overflow-x: hidden;
        font-weight: 400;
        line-height: 1.6;
        font-size: 18px;
        font-family: 'Enriqueta', serif;
        margin: 0px;
    }
`;

export default GlobalStyle;
