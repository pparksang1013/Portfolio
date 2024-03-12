import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContents = () => {
    return (
        <StyleHomeContents
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 50 }}
            transition={{ duration: 1, delay: 3 }}
        >
            HomeContents
        </StyleHomeContents>
    );
};

const StyleHomeContents = styled(motion.div)``;
