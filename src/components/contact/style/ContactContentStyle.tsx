import styled from "styled-components";

const Box = styled.div`
    width: 1200px;
    height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    gap: 100px;
    padding-top: 280px;
`;

const Title = styled.h3`
    min-width: 50%;
    font-size: 2.7rem;
    line-height: 1.33;
    -webkit-text-stroke: 1px;
    text-shadow: 3px 3px 4px rgba(var(--primary-rgb), 0.1), -3px -3px 4px rgba(var(--primary-rgb), 0.1);
    word-break: keep-all;
    font-weight: 100;

    & b {
        font-size: 1.15em;
        isolation: isolate;
        font-weight: 900;
        color: var(--primary-color);
    }
`;

const Ul = styled.ul`
    font-family: "quicksilver";
    min-width: 50%;
    margin-top: 2rem;
`;

const Li = styled.li`
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    color: rgba(var(--primary-rgb), 1);
    gap: 25px;
    padding: 10px;
    border-radius: 28px;
    margin-bottom: 20px;
    background-color: rgba(var(--primary-rgb), 0.1);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.04), -2px -2px 6px rgba(0, 0, 0, 0.04);
`;

const IconBox = styled.div`
    background-image: linear-gradient(to top, rgba(var(--orange-rgb), 0.05), rgba(var(--primary-rgb), 0.2));
    background-color: rgba(var(--primary-rgb), 0.2);
    padding: 22px 26px;
    border-radius: 22px;
    box-shadow: 2px 2px 4px rgba(var(--primary-rgb), 0.1);
`;

const LiBox = styled.div`
    color: var(--darkgrey-color);
    position: relative;

    h5 {
        font-size: 0.9em;
        font-weight: 900;
    }

    p {
        color: rgba(20, 20, 20, 0.7);
        letter-spacing: 1px;
        font-size: 1.6rem;
    }

    a {
        font-size: 1.6rem;
        color: rgba(20, 20, 20, 0.7);

        &:visited {
            color: rgba(20, 20, 20, 0.7);
        }
    }
`;

export const contactContentsStyle = {
    Box,
    Title,
    Ul,
    Li,
    IconBox,
    LiBox,
};
