import { styled } from "styled-components";
import { CommonComponents } from "../common_comp/Index";
import SlideComp from "./SlideComp";

function ProjectComp() {
    return (
        <Style_Wrapper>
            <div className="max_widthBox">
                <CommonComponents.H3Comp title="프로젝트" color="var(--primary-color)" fontsize="2rem" stroke />
                <SlideComp />
            </div>
        </Style_Wrapper>
    );
}

export default ProjectComp;

const Style_Wrapper = styled(CommonComponents.WrapperComp)`
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    height: fit-content;
    padding: 100px 0;

    .max_widthBox {
        width: 1200px;
        margin: 0 auto;
    }
`;
