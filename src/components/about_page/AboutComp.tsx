import styled from "styled-components";
import { CommonComponents } from "../common_comp/Index";
import { GridAreaComp } from "./GridAreaComp";

function AboutComp() {
    return (
        <Style_Wrapper>
            <CommonComponents.H3Comp title="자기소개" color="#d7d7d7" fontsize="2rem" stroke />
            <Style_GridBox>
                <GridAreaComp.NameArea />
                <GridAreaComp.WantedArea />
                <GridAreaComp.BootcampArea />
                <GridAreaComp.SchoolArea />
                <GridAreaComp.GitArea />
            </Style_GridBox>
        </Style_Wrapper>
    );
}

export default AboutComp;

const Style_Wrapper = styled(CommonComponents.WrapperComp)`
    padding-top: 1rem;
    max-width: 1300px;
    min-height: 120vh;
    margin: 0 auto;
`;

const Style_GridBox = styled.div`
    display: grid;
    grid-template-areas:
        "name name wanted school"
        "bootcamp bootcamp bootcamp school"
        "bootcamp bootcamp bootcamp git";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 18px;

    & > div {
        border-radius: 20px;
        min-height: 250px;
    }
`;
