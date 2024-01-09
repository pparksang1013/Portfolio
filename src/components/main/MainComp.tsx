import styled from "styled-components";

function Main() {
    return (
        <Style_MainWrapper>
            <Style_Title>IMPORT</Style_Title>
        </Style_MainWrapper>
    );
}

export default Main;

const Style_MainWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;

    background-image: url("../../../public/img/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Style_Title = styled.h1`
    font-size: 8rem;
    font-weight: 900;
    font-family: "akira";
    color: #fff;
    padding: 20px 50px;
    background-color: #f20505;
    mix-blend-mode: overlay;

    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
`;
