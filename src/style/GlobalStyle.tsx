import { createGlobalStyle } from "styled-components";
import happinessTitle from "../assets/font/Happiness-Sans-Title.woff2";
import happinessBold from "../assets/font/Happiness-Sans-Bold.woff2";
import happinessReg from "../assets/font/Happiness-Sans-Regular.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'happiness';
        src: url(${happinessReg}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'happiness';
        src: url(${happinessBold}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'happiness';
        src: url(${happinessTitle}) format('woff2');
        font-weight: 900;
        font-style: normal;
    }

    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f2f2f2;
    font-family: "happiness";
    font-weight: 900;
    font-size: 4rem;
    }

`;
