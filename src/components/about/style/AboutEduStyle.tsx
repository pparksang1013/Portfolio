import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled.div`
    background-color: #f0f4f3;
`;

const Ul = styled.ul`
    padding: 4rem 0;
    width: 900px;
    margin: 0 auto;
`;

const Li = styled(motion.li)`
    display: flex;
    margin-bottom: 30px;
    padding-top: 30px;
    border-top: 1px solid #9fa0a0;

    &:first-of-type {
        border-top: none;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Title = styled.h2`
    font-family: "quicksilver";
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
    color: var(--primary-color);
    -webkit-text-stroke: 1px;
`;

const LeftBox = styled.div`
    font-size: 0.9rem;
    font-weight: 800;
    color: var(--darkgrey-color);
    width: 16%;
    margin-top: 3px;
`;

const RightBox = styled.div`
    word-wrap: break-word;
    width: 84%;
`;

const SubTitle = styled.h4`
    font-size: 2.2rem;
    font-weight: 900;
    line-height: 1.2;
    -webkit-text-stroke: 0.6px;
    word-spacing: 4px;

    & > span {
        font-size: 1.1rem;
        font-weight: 600;
    }
`;

const Desc = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 4px;
    word-break: keep-all;
`;

export const aboutEduStyle = { Box, Ul, Li, Title, LeftBox, RightBox, SubTitle, Desc };
