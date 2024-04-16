import { headerBoxStyle } from "./style/HeaderBoxStyle";
import { useScroll, useTransform } from "framer-motion";

export const HeaderBox = ({ children, shouldAnimate }: { children: React.ReactNode; shouldAnimate?: boolean }) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 1], [0, 1]);

    return <headerBoxStyle.Box style={{ opacity: shouldAnimate ? 1 : opacity }}>{children}</headerBoxStyle.Box>;
};
