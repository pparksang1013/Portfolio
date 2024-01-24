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
                <Style_SlideLeft>
                    <div className="title_box">
                        <h2>{ele.title}</h2>
                        {ele.sub}
                    </div>

                    <div className="stack_box">
                        <Style_H3>스택</Style_H3>
                        {ele.stack.map((Stack, i) => (
                            <React.Fragment key={i}>{Stack}</React.Fragment>
                        ))}
                    </div>

                    <div className="role_box">
                        <Style_H3>역할</Style_H3>
                        {ele.role}
                    </div>
                </Style_SlideLeft>

                <Style_SlideRight>
                    <div className="detail_box"></div>
                </Style_SlideRight>
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
    align-items: center;
    gap: 30px;
`;

const Style_Slide = styled.li`
    height: 660px;
    min-width: 1250px;
    border-radius: 10px;
    background-color: #fff;
    border: 0.1px solid #868f9690;
    padding: 30px 40px;
    display: flex;
    gap: 20px;
`;

const Style_SlideLeft = styled.div`
    width: 50%;

    .title_box {
        h2 {
            font-size: 3.2rem;
            font-weight: 900;
            color: var(--color-black);
        }

        img {
            width: 35px;
            height: 35px;
            display: block;
            margin-left: 5px;
        }
    }

    .stack_box {
        margin-top: 4rem;

        svg {
            display: inline-block;
            margin-right: 10px;
        }
    }

    .role_box {
        margin-top: 4rem;
    }
`;

const Style_SlideRight = styled.div`
    width: 50%;
`;

const Style_H3 = styled.h3`
    color: var(--black-color);
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 8px;
`;
