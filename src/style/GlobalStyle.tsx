import { createGlobalStyle } from "styled-components";
import minsans from "/font/MinSansVF.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "minsans";
        src: url(${minsans}) format('woff2-variations');
        font-weight: 100 900;
    }


    :root {
        --black-color: #454545;
        --primary-color: #8091F2;
        --primary-rgb: 128, 145, 242;
        --yellow-color: #FFE385;
        --orange-color: #ff6c4f;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "minsans";
        background-color: rgb(251,251,251);
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding:0;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        display: none; 
    }
`;
