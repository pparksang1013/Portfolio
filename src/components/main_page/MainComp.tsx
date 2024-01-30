import styled from "styled-components";
import { CommonComponents } from "../common_comp/Index";

function Main() {
    return (
        <Style_MainWrapper>
            <p className="fortfolio">포트폴리오</p>

            <Style_Box>
                <p className="name">NPM RUN INSTALL PARK SANG MIN</p>

                <img src="/img/logo.png" alt="logo" width="140" height="50" />
                <Style_Title>IMPORT</Style_Title>
            </Style_Box>
        </Style_MainWrapper>
    );
}

export default Main;

const Style_MainWrapper = styled(CommonComponents.WrapperComp)`
    position: relative;

    .fortfolio {
        font-size: 1.72rem;
        font-weight: 900;
        translate: 100px 70px;
        color: #a3a3a3;
    }
`;

const Style_Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    font-family: "akira";

    .name {
        text-align: center;
        margin-bottom: 50px;
        color: #fff;
        background-color: #57746f;
        border-radius: 60px;
        padding: 12px 30px;
        width: fit-content;
        word-spacing: 2px;
        letter-spacing: 1px;
    }
`;

const Style_Title = styled.h1`
    font-size: 9rem;
    font-weight: 900;
    font-family: "akira";
    color: #454f4d;
    position: relative;
    margin-top: -26px;
`;
