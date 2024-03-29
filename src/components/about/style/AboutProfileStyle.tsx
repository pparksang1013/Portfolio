import styled from "styled-components";

const Box = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
`;

const NameBox = styled.div`
    padding: 12.5rem 0 0 24rem;
    display: flex;
    gap: 10px;
`;

const Name = styled.h2`
    font-size: 8.2rem;
    -webkit-text-stroke: 3px transparent;
    font-weight: 900;
    letter-spacing: 2px;
    color: var(--black-color);
    background: radial-gradient(ellipse at top, #71d4ae, var(--primary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const NameContents = styled.div`
    margin-top: 96px;
`;

const Birth = styled.span`
    font-size: 0.9rem;
    font-weight: 900;
    color: var(--darkgrey-color);
`;

const EngName = styled.span`
    font-size: 1.8rem;
    font-family: "quicksilver";
    -webkit-text-stroke: 0px;
    letter-spacing: 1px;
    color: var(--darkgrey-color);
`;

const Desc = styled.div`
    margin-top: 0.5rem;
    padding-left: 24.2rem;
    font-size: 1.25rem;
    font-weight: 600;
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const aboutProfileStyle = {
    Box,
    NameBox,
    Name,
    NameContents,
    Birth,
    EngName,
    Desc,
    ImgBox,
};
