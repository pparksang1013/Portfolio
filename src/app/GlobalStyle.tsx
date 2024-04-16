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
        --black-color: #1c2e27;
        --primary-color: #1AB478;
        --primary-rgb: 26, 180, 120;
        --red-color:#F25260;
        --blue-color: #4886D9;
        --yellow-color: #FFE385;
        --orange-color: #FF8B4F;
        --orange-rgb: 255, 139, 79;
        --grey-color: #b6b6b6;
        --lightgrey-color:#EDF1F2;
        --darkgrey-color: #888;
        --darkgrey-rgb: 136, 136, 136;
        --greengrey-color: #f0f4f3;
        --font-toss: "Tossface";
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
