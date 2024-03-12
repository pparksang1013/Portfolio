import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeTitle = () => {
    return (
        <StyleHomeTitle
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -300 }}
            transition={{ opacity: { duration: 1.4, delay: 1 }, x: { duration: 0.5, delay: 2.4 } }}
        >
            프론트엔드 <br />
            포트폴리오 <br />
            박상민
        </StyleHomeTitle>
    );
};

const StyleHomeTitle = styled(motion.h1)`
    font-size: 6.6rem;
    font-weight: 900;
    color: #f4f4f4;
    line-height: 1.2;
    mix-blend-mode: overlay;
`;
