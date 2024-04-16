import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.header)`
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-items: center;
    gap: 40px;
    position: fixed;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(10px);
    background-color: rgba(251, 251, 251, 0.77);
`;

export const headerBoxStyle = {
    Box,
};
