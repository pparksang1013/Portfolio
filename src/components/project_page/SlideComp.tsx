import React, { useState } from "react";
import { styled } from "styled-components";
import { motion, useMotionValue } from "framer-motion";

import { projects_data } from "./project_data";

const DRAG_RANGE = 50;

function SlideComp() {
    const [drag, setDrag] = useState(false);
    const [slideIdx, setSlideIdx] = useState(0);
    const motionX = useMotionValue(0);

    const project = projects_data.map((ele, i) => {
        return (
            <Style_Slide key={i}>
                <div className="title_box">
                    <img src={ele.icon} alt="icon" />
                    {ele.title}
                </div>

                <div className="stack_box">
                    {ele.stack.map((Stack, i) => (
                        <React.Fragment key={i}>{Stack}</React.Fragment>
                    ))}
                </div>

                <div className="detail_box"></div>
            </Style_Slide>
        );
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
            <Style_ProjectTitle>프로젝트</Style_ProjectTitle>
            <Style_SlideBox
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                animate={{ translateX: `calc(-${slideIdx * 100}%)` }}
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

const Style_ProjectTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 900;
    color: #c3c3c3;
    margin-bottom: 1.4rem;
`;

const Style_SlideBox = styled(motion.ul)`
    display: flex;
    gap: 30px;
`;

const Style_Slide = styled.li`
    height: 600px;
    min-width: 1250px;
    border-radius: 10px;
    background-color: #fff;

    .title_box {
        img {
            width: 35px;
            height: 35px;
        }

        display: flex;
        align-items: center;
        gap: 10px;
        padding: 30px;
        font-size: 2.7rem;
        font-weight: 900;
        -webkit-text-stroke: 1px var(--black-color);
        color: var(--black-color);
    }
`;
