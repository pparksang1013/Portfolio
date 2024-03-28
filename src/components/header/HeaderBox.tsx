import styled from "styled-components";
import { useScroll, useMotionValue, motion, useTransform } from "framer-motion";

export const HeaderBox = ({ children }: { children: React.ReactNode }) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 1], [0, 1]);

    return <StyleHeaderBox style={{ opacity }}>{children}</StyleHeaderBox>;
};

const StyleHeaderBox = styled(motion.header)`
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
