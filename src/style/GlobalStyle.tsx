import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
