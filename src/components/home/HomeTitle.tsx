import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeTitle = () => {
    return (
        <StyleTitleBox>
            <StyleFrontend
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    opacity: { duration: 1.4, delay: 0.5 },
                    x: { duration: 1.4, delay: 0.5 },
                }}
            >
                FRONTEND
            </StyleFrontend>
            <StyleHomeTitle
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ opacity: { duration: 1, delay: 1.5 }, scale: { duration: 1, delay: 1.5 } }}
            >
                <StyleColon>:</StyleColon>
                PORTFOLIO
            </StyleHomeTitle>
            <StyleName
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ opacity: { duration: 1.4, delay: 0.5 }, x: { duration: 1.4, delay: 0.5 } }}
            >
                PARKSANGMIN
            </StyleName>
        </StyleTitleBox>
    );
};

const StyleTitleBox = styled.div`
    font-family: "quicksilver";
`;

const StyleFrontend = styled(motion.p)`
    font-size: 2rem;
    line-height: 0.2;
    margin-left: 3.5rem;
    color: #2fcc90;
`;

const StyleHomeTitle = styled(motion.h1)`
    font-size: 9.2rem;
    line-height: 1;
    letter-spacing: 1.2px;
    background: linear-gradient(180deg, #2fcc90 0%, var(--primary-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 3rem;
`;

const StyleColon = styled.span`
    padding-right: 16px;
`;

const StyleName = styled(motion.p)`
    font-size: 3rem;
    text-align: right;
    margin-right: 4rem;
    color: var(--primary-color);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;
