import { createGlobalStyle } from "styled-components";
import wantedSans from "../assets/font/WantedSansVariable.woff2";
import akira from "../assets/font/AkiraExpandedDemo.otf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'wanted';
        src: url(${wantedSans}) format('woff2-variations');
        font-weight: 100 900;
        font-style: normal;
    }

    @font-face {
        font-family: "akira";
        src: url(${akira});
        font-weight: 900;
    }

    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "wanted";
    font-weight: 900;
    font-size: 4rem;

    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }
`;
