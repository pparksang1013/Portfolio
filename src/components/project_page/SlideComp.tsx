import { useState } from "react";
import { styled } from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { projects_data } from "../../data/project_data";

// TYPE
import { title_interface } from "../../types/title";
import { stack_type } from "../../types/stack";
import { insight_interface } from "../../types/insight";

// SLIDE CONTENTS COMP
import ProjectTitleComp from "./slidecontents/ProjectTitleComp";
import StackComp from "./slidecontents/StackComp";
import InsightComp from "./slidecontents/InsightComp";
import RepoComp from "./slidecontents/RepoComp";

const DRAG_RANGE = 50;

function SlideComp() {
    const [drag, setDrag] = useState(false);
    const [slideIdx, setSlideIdx] = useState(0);
    const motionX = useMotionValue(0);

    const SLIDE_CONTENTS = projects_data.map((ele) => {
        return (
            <Style_Slide key={ele.id}>
                <Style_SlideLeft>
                    <ProjectTitleComp title={ele.title} id={ele.id as keyof title_interface} />
                    <StackComp stack={ele.id as keyof stack_type} />

                    <RepoComp repo={ele.repository} />
                </Style_SlideLeft>

                <Style_Borderline />

                <Style_SlideRight>
                    <InsightComp insight={ele.id as keyof insight_interface} />
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
            <Style_SlideBox
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                animate={{ translateX: `calc(-${slideIdx * 100}%)` }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                transition={{ duration: 0.3 }}
                style={{ x: motionX }}
            >
                {SLIDE_CONTENTS}
            </Style_SlideBox>
        </>
    );
}

export default SlideComp;

const Style_SlideBox = styled(motion.ul)`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const Style_Slide = styled.li`
    height: 550px;
    min-width: calc(1200px - 30px);
    border-radius: 10px;
    background-color: #fff;
    border: 0.1px solid #868f9690;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 26px;
    flex: 1;
`;

const Style_SlideLeft = styled.div`
    width: 40%;
    height: 100%;
`;

const Style_SlideRight = styled.div`
    width: 60%;
    height: 100%;
    overflow: scroll;
    padding-right: 10px;
    word-break: keep-all;
`;

const Style_Borderline = styled.div`
    height: 90%;
    width: 1px;
    background-color: var(--primary-color);
`;
