import styled from "styled-components";
import { SkillListEle } from "./child/SkillListEle";
import { SkillTab } from "./child/SkillTab";

export const AboutSkill = () => {
    return (
        <StyleSkillBox>
            <StyleSkillTitle>: skill</StyleSkillTitle>
            <StyleSkillDesc>
                프로젝트 수행과 개인 학습을 통해 <b>다양한 기술</b>을 습득하였습니다.
            </StyleSkillDesc>
            <StyleSkillUl>
                <SkillListEle item="html" kor="에이치티엠엘" maincolor="#ff793f" secondcolor="#ffa47d" />
                <SkillListEle item="css" kor="씨에스에스" maincolor="#2289ff" secondcolor="#9dc3ee" />
                <SkillListEle item="js" kor="자바스크립트" maincolor="#fec21d" secondcolor="#eee599" />
                <SkillListEle item="react" kor="리액트" maincolor="#20d3e7" secondcolor="#94f2fd" />
                <SkillListEle item="next" kor="넥스트" maincolor="#707070" secondcolor="#c1c1c1" />
                <SkillListEle item="ts" kor="타입스크립트" maincolor="#2d70f6" secondcolor="#b9d2ef" />
                <SkillListEle item="git" kor="깃" maincolor="#ff793f" secondcolor="#ffa47d" />
                <SkillListEle
                    item="styled-components"
                    kor="스타일드컴포넌츠"
                    maincolor="#ff91e2"
                    secondcolor="#feb9eb"
                    size="1.4rem"
                />
                <SkillListEle item="axios" kor="액시오스" maincolor="#2a2a2a" secondcolor="#909090" />
                <SkillListEle
                    item="react-router-dom"
                    kor="리액트라우터돔"
                    maincolor="#55ffff"
                    secondcolor="#9decec"
                    size="1.4rem"
                />
                <SkillListEle
                    item="framer motion"
                    kor="프레이머모션"
                    maincolor="#2a2a2a"
                    secondcolor="#909090"
                    size="1.4rem"
                />
            </StyleSkillUl>
            <SkillTab />
        </StyleSkillBox>
    );
};

const StyleSkillBox = styled.div`
    max-width: 900px;
    margin: 50px auto 50px;
`;

const StyleSkillTitle = styled.h2`
    font-family: "quicksilver";
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: var(--red-color);
    -webkit-text-stroke: 1px;
`;

const StyleSkillDesc = styled.p`
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;

    & b {
        font-size: 1.8em;
        color: var(--red-color);
        -webkit-text-stroke: 2px;
        margin-left: 3px;
    }
`;

const StyleSkillUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 900px;
    gap: 2rem 5rem;
    margin: 1.5rem auto 3rem;
`;
