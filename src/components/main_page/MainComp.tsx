import styled from "styled-components";
import { CommonComponents } from "../common_comp/Index";

function Main() {
    return (
        <Style_MainWrapper>
            <p className="portfolio">포트폴리오</p>

            <p className="npm">NPM INSTALL PARK SANG MIN</p>

            <Style_Box>
                <img src="/img/logo.png" alt="logo" width="160" height="60" />

                <Style_Title>IMPORT</Style_Title>
            </Style_Box>

            <img src="/img/function.png" alt="function_img" height="28" className="function" />
        </Style_MainWrapper>
    );
}

export default Main;

const Style_MainWrapper = styled(CommonComponents.WrapperComp)`
    position: relative;
    font-family: "akira";

    .portfolio {
        font-size: 1.72rem;
        font-weight: 900;
        translate: 200px 80px;
        color: #a3a3a3;
    }

    .npm {
        color: var(--primary-color);
        border-radius: 60px;
        word-spacing: 2px;
        letter-spacing: 1px;
        position: absolute;
        top: 34.8%;
        left: 28.33%;
    }

    .function {
        position: absolute;
        bottom: 20%;
        left: 28.33%;
    }
`;

const Style_Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
`;

const Style_Title = styled.h1`
    font-size: 9rem;
    font-weight: 900;
    font-family: "akira";
    color: #454f4d;
    position: relative;
    margin-top: -24px;
`;
