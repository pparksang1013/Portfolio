import { createGlobalStyle } from "styled-components";
import minsans from "/font/MinSansVF.ttf";
import quicksilver from "/font/Quicksilver.ttf";
import quickItalic from "/font/Quicksilver_Italic.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "minsans";
        src: url(${minsans}) format('woff2-variations');
        font-weight: 100 900;
    }

    @font-face {
        font-family: "quicksilver";
        src: url(${quicksilver}) format('truetype');
        font-weight: 900;
    }

    @font-face {
        font-family: "quickitalic";
        src: url(${quickItalic}) format('truetype');
        font-weight: 900;
    }


    :root {
        --black-color: #454545;
        --primary-color: #3B74F2;
        --primary-rgb: 128, 145, 242;
        --dark-primary: #3A3AF2;
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

    a:visited {
        color: var(--primary-color);
    }

    ::-webkit-scrollbar {
        display: none; 
    }
`;
