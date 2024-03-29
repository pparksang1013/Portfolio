import { createGlobalStyle } from "styled-components";
import suit from "../assets/font/SUIT-Variable.woff2";
import akira from "../assets/font/AkiraExpandedDemo.otf";

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
        --black-color: #454545;
        --primary-color: #24D3B1;
        --primary-rgb: 36, 211, 177;
        --blue-color: #4078D3;
        --yellow-color: #FFE385;
        --orange-color: #ff6c4f;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "suit";
        overflow-x: hidden;
        color: var(--black-color);
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
