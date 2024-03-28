import styled from "styled-components";
import profileImg from "/img/parksangmin.png";

export const AboutProfile = () => {
    return (
        <StyleProfileBox>
            <StyleNameBox>
                <StyleName>박상민</StyleName>
                <StyleNameContents>
                    <StyleBirth>93. 10. 13.</StyleBirth> <br />
                    <StyleEngName>parksangmin</StyleEngName>
                </StyleNameContents>
            </StyleNameBox>
            <StyleDescription>👋 타인의 의견을 수용하며 지속적으로 성장해 나가는 프론트엔드 개발자</StyleDescription>
            <StyleImgBox>
                <img src={profileImg} height={570} />
            </StyleImgBox>
        </StyleProfileBox>
    );
};

const StyleProfileBox = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
`;

const StyleNameBox = styled.div`
    padding: 11.5rem 0 0 24rem;
    display: flex;
    gap: 10px;
`;

const StyleName = styled.h2`
    font-size: 8.2rem;
    -webkit-text-stroke: 3px transparent;
    font-weight: 900;
    letter-spacing: 2px;
    color: var(--black-color);
    background: radial-gradient(ellipse at top, #71d4ae, var(--primary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const StyleNameContents = styled.div`
    margin-top: 96px;
`;

const StyleBirth = styled.span`
    font-size: 0.9rem;
    font-weight: 900;
    color: var(--darkgrey-color);
`;

const StyleEngName = styled.span`
    font-size: 1.8rem;
    font-family: "quicksilver";
    -webkit-text-stroke: 0px;
    letter-spacing: 1px;
    color: var(--darkgrey-color);
`;

const StyleDescription = styled.div`
    margin-top: 0.5rem;
    padding-left: 24.2rem;
    font-size: 1.25rem;
    font-weight: 600;
`;

const StyleImgBox = styled.div`
    display: flex;
    justify-content: center;
`;
