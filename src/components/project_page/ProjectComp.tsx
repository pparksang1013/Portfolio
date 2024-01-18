import { styled } from "styled-components";
import { Wrapper } from "../style/CommonStyleComp";
import SlideComp from "./SlideComp";

function ProjectComp() {
    return (
        <Style_Wrapper>
            <div className="max_widthBox">
                <SlideComp />
            </div>
        </Style_Wrapper>
    );
}

export default ProjectComp;

const Style_Wrapper = styled(Wrapper)`
    background-color: var(--black-color);
    display: flex;
    align-items: center;

    .max_widthBox {
        width: 1280px;
        margin: 0 auto;
    }
`;
