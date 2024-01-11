import { createGlobalStyle } from "styled-components";
import suit from "../../assets/font/SUIT-Variable.woff2";
import akira from "../../assets/font/AkiraExpandedDemo.otf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'suit';
        src: url(${suit}) format('woff2-variations');
        font-weight: 100 900;
        font-style: normal;
    }

    @font-face {
        font-family: "akira";
        src: url(${akira});
        font-weight: 900;
    }

    :root {
        --primary-color: #f20505;
        --primary-rgb: 217, 4, 22;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "suit";
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }
`;
