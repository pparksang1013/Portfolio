import styled from "styled-components";
import { useScroll, useMotionValue, motion, useTransform } from "framer-motion";

export const HeaderBox = ({ children }: { children: React.ReactNode }) => {
    const { scrollY } = useScroll();
    const filter = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(10px)"]);
    const bgColor = useTransform(scrollY, [0, 50], ["rgba(251, 251, 251, 0)", "rgba(251, 251, 251, 0.2)"]);

    return <StyleHeaderBox style={{ backdropFilter: filter, backgroundColor: bgColor }}>{children}</StyleHeaderBox>;
};

const StyleHeaderBox = styled(motion.header)`
    width: 100%;
    margin: 0 auto;
    padding: 30px 70px;
    display: flex;
    gap: 40px;
    position: fixed;
    top: 0;
`;
