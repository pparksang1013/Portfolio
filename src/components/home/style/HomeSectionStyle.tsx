import styled from "styled-components";
import background from "/img/home_bg.png";

const HomeSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
`;

export const homeSectionStyle = {
    HomeSection,
};
