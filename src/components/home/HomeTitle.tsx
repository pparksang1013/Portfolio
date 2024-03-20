import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeTitle = () => {
    return (
        <StyleTitleBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 1.4, delay: 1 } }}
        >
            <StyleFrontend>FRONTEND</StyleFrontend>
            <StyleHomeTitle>PORTFOLIO</StyleHomeTitle>
            <StyleName>PARKSANGMIN</StyleName>
        </StyleTitleBox>
    );
};

const StyleTitleBox = styled(motion.div)`
    width: 50%;
    font-family: "quickitalic";
    padding-left: 10.4rem;
`;

const StyleFrontend = styled.p`
    font-size: 2rem;
    line-height: 0.2;
    margin-left: 1.8rem;
    color: #2fcc90;
`;

const StyleHomeTitle = styled.h1`
    font-size: 7.7rem;
    line-height: 1;
    letter-spacing: 1.2px;
    background: linear-gradient(180deg, #2fcc90 0%, var(--primary-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const StyleName = styled.p`
    font-size: 3rem;
    text-align: right;
    margin-right: 5rem;
    color: var(--primary-color);
`;
