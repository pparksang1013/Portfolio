import styled from "styled-components";
import { SubTitleComp } from "./SubTitleComp";
import { Wrapper, Highlight, CategoryBox } from "../style/CommonStyleComp";

function AboutComp() {
    return (
        <Style_Wrapper>
            <Style_FlexBox>
                <div className="left">
                    <Style_Title>
                        npm install '<span>park sang min</span>'
                    </Style_Title>
                </div>
                <div className="right">
                    <SubTitleComp character="포용력" />
                    <SubTitleComp character="디자인" />
                    <SubTitleComp character="팀워크" />
                </div>
            </Style_FlexBox>
        </Style_Wrapper>
    );
}

export default AboutComp;

const Style_Wrapper = styled(Wrapper)`
    padding-top: 1rem;
    max-width: 1300px;
    margin: 0 auto;
`;

const Style_FlexBox = styled.div`
    display: flex;
    gap: 30px;

    .left {
        width: 50%;
        background-color: #242424;
    }

    .right {
        width: 50%;
        background-color: #cecece;
    }
`;

const Style_Title = styled.h2`
    font-size: 2rem;
    font-weight: 300;

    span {
        font-family: "akira";
        font-size: calc(1em - 3px);
        letter-spacing: 2px;
    }
`;

{
    /* <Style_FlexBox>
<div className="left">
    <Style_Title>
        npm install '<span>park sang min</span>'
    </Style_Title>
</div>
<div className="right">
    <SubTitleComp character="포용력" />
    <SubTitleComp character="디자인" />
    <SubTitleComp character="팀워크" />
</div>
</Style_FlexBox> */
}
