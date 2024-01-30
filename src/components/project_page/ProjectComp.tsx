import { styled } from "styled-components";
import { CommonComponents } from "../common_comp/Index";
import SlideComp from "./SlideComp";

function ProjectComp() {
    return (
        <Style_Wrapper>
            <div className="max_widthBox">
                <CommonComponents.H3Comp title="프로젝트" color="#c3c3c3" />
                <SlideComp />
            </div>
        </Style_Wrapper>
    );
}

export default ProjectComp;

const Style_Wrapper = styled(CommonComponents.WrapperComp)`
    background-color: #f2f2f2;
    display: flex;
    align-items: center;

    .max_widthBox {
        width: 1280px;
        margin: 0 auto;
    }
`;
