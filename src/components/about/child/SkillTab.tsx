import { useState } from "react";
import styled from "styled-components";
import { skillTabData } from "../../../data/about/about";
import { IStyleSkillTabLi } from "../type";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

// COMPONENT
import { TabJs } from "./TabJs";
import { TabReact } from "./TabReact";

export const SkillTab = () => {
    const [tab, setTab] = useState(0);

    const lists = skillTabData.map((ele) => {
        return (
            <StyleTabTitleLi key={ele.id} onClick={() => setTab(ele.id)} $active={ele.id === tab}>
                <h4>
                    {ele.title} <LiaLongArrowAltRightSolid />
                </h4>
            </StyleTabTitleLi>
        );
    });

    return (
        <StyleSkillTabBox>
            <StyleTabTitleUl>{lists}</StyleTabTitleUl>
            <StyleTabContents>
                {tab === 0 && <TabJs />}
                {tab === 1 && <TabReact />}
            </StyleTabContents>
        </StyleSkillTabBox>
    );
};

const StyleSkillTabBox = styled.div`
    width: 100%;
    height: 400px;
    background-color: rgba(251, 251, 251, 1);
    padding: 20px;
    border-radius: 8px;
    border: 2px solid rgba(var(--darkgrey-rgb), 0.18);
    display: flex;
    gap: 20px;
`;

const StyleTabTitleUl = styled.ul`
    width: 20%;
    height: fit-content;
    border-radius: 4px;
    background-color: var(--lightgrey-color);
    padding: 3px;
`;

const StyleTabTitleLi = styled.li<IStyleSkillTabLi>`
    border-radius: 4px;
    font-weight: 900;
    font-size: 0.88em;
    padding: 10px 14px;
    background-color: ${(props) => (props.$active ? "#fff" : "")};
    color: ${(props) => (props.$active ? "var(--black-color)" : "#d0d0d0")};

    &:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        color: var(--black-color);
    }

    & h4 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const StyleTabContents = styled.div`
    width: 80%;
    padding: 12px 20px;
    border-radius: 6px;
    border: 1px solid rgba(var(--darkgrey-rgb), 0.18);
`;
