import { useState } from "react";
import { styled } from "styled-components";
import { motion, useMotionValue } from "framer-motion";

import { projects_data } from "./project_data";

const DRAG_RANGE = 50;

function SlideComp() {
    const [drag, setDrag] = useState(false);
    const [slideIdx, setSlideIdx] = useState(0);
    const motionX = useMotionValue(0);

    const project = projects_data.map((ele, i) => {
        return <Style_Slide key={i}>{ele.title}</Style_Slide>;
    });

    const handleDragStart = () => {
        setDrag(true);
    };

    const handleDragEnd = () => {
        setDrag(false);

        const draggedX = motionX.get();

        if (draggedX <= -DRAG_RANGE && slideIdx < projects_data.length - 1) {
            setSlideIdx((prev) => prev + 1);
        } else if (draggedX >= DRAG_RANGE && slideIdx > 0) {
            setSlideIdx((prev) => prev - 1);
        }
    };

    return (
        <>
            <Style_SlideBox
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                animate={{ translateX: `-${slideIdx * 100}%` }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                transition={{ duration: 0.48, ease: "easeOut" }}
                style={{ x: motionX }}
            >
                {project}
            </Style_SlideBox>
        </>
    );
}

export default SlideComp;

const Style_SlideBox = styled(motion.ul)`
    display: flex;
    gap: 30px;
`;

const Style_Slide = styled.li`
    height: 600px;
    min-width: 1280px;
    border-radius: 10px;
    background-color: #fff;
`;
