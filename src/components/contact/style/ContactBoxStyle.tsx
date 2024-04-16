import styled from "styled-components";
import background from "/img/parksangmin.png";

const Box = styled.section`
    color: var(--black-color);
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    background-image: url(${background});
    background-size: 26%;
    background-position: 22% 112%;
    background-repeat: no-repeat;
`;

export const contactBoxStyle = { Box };
