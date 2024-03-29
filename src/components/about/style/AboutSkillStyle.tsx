import styled from "styled-components";

const Box = styled.div`
    max-width: 900px;
    margin: 50px auto 50px;
`;

const Title = styled.h2`
    font-family: "quicksilver";
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: var(--red-color);
    -webkit-text-stroke: 1px;
`;

const Desc = styled.p`
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;

    & b {
        font-size: 1.8em;
        color: var(--red-color);
        -webkit-text-stroke: 2px;
        margin-left: 3px;
    }
`;

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 900px;
    gap: 2rem 5rem;
    margin: 1.5rem auto 3rem;
`;

export const aboutSkillStyle = {
    Box,
    Title,
    Desc,
    Ul,
};
