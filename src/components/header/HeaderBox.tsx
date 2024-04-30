import { useState } from "react";
import { headerBoxStyle } from "./style/HeaderBoxStyle";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const HeaderBox = ({ children, shouldAnimate }: { children: React.ReactNode; shouldAnimate?: boolean }) => {
    const [animateRepeat, setAnimateRepeat] = useState(false);
    const { scrollY } = useScroll();
    const once = animateRepeat || shouldAnimate;
    const opacity = useTransform(scrollY, [0, 1], [0, 1]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 2) {
            setAnimateRepeat(true);
            return;
        } else {
            return;
        }
    });

    return <headerBoxStyle.Box style={{ opacity: once ? 1 : opacity }}>{children}</headerBoxStyle.Box>;
};
