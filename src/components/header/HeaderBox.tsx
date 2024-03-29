import { headerBoxStyle } from "./style/HeaderBoxStyle";
import { useScroll, useTransform } from "framer-motion";

export const HeaderBox = ({ children }: { children: React.ReactNode }) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 1], [0, 1]);

    return <headerBoxStyle.Box style={{ opacity }}>{children}</headerBoxStyle.Box>;
};
