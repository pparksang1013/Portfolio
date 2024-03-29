import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled.div`
    font-family: "quicksilver";
`;

const Frontend = styled(motion.p)`
    font-size: 2rem;
    line-height: 0.2;
    margin-left: 3.5rem;
    color: #2fcc90;
`;

const Title = styled(motion.h1)`
    font-size: 9.2rem;
    line-height: 1;
    letter-spacing: 1.2px;
    background: linear-gradient(180deg, #2fcc90 0%, var(--primary-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 3rem;
`;

const Colon = styled.span`
    padding-right: 16px;
`;

const Name = styled(motion.p)`
    font-size: 3rem;
    text-align: right;
    margin-right: 4rem;
    color: var(--primary-color);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const homeTitleStyle = {
    Box,
    Frontend,
    Title,
    Colon,
    Name,
};
