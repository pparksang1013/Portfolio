import styled from "styled-components";
import { Wrapper } from "../style/CommonStyleComp";

function Main() {
    return (
        <Style_MainWrapper>
            <Style_Box>
                <p className="fortfolio">포트폴리오</p>
                <Style_Title>IMPORT</Style_Title>
                <p className="name">박상민</p>
            </Style_Box>
        </Style_MainWrapper>
    );
}

export default Main;

const Style_MainWrapper = styled(Wrapper)`
    position: relative;
`;

const Style_Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    p {
        font-size: 1.72rem;
        font-weight: 900;
    }

    .fortfolio {
        margin-bottom: 4px;
    }

    .name {
        font-size: 2.6rem;
        text-align: right;
        letter-spacing: 4px;
        margin-top: 4px;
    }
`;

const Style_Title = styled.h1`
    font-size: 8rem;
    font-weight: 900;
    font-family: "akira";
    color: #fff;
    background-color: rgba(var(--primary-rgb), 0.7);
    padding: 20px 50px;
    position: relative;
    filter: saturate(1.55);

    &::after {
        content: "";
        background: url("/img/paper_texture.jpg") no-repeat center center;
        background-size: cover;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: multiply;
    }
`;
