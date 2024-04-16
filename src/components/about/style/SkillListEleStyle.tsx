import styled from "styled-components";
import { SkillListStyleInterface } from "../type/skill_list_type";

const Item = styled.div<SkillListStyleInterface>`
    font-family: "quicksilver";

    & p {
        font-size: ${(props) => (props.$size ? props.$size : "2.5rem")};
        margin-bottom: -24px;
    }
`;

const Colon = styled.span`
    display: inline-block;
    font-size: 1.1em;
    margin-right: 8px;
`;

const Kor = styled.span`
    font-weight: 900;
    font-size: 0.9rem;
    vertical-align: middle;
`;

const List = styled.li<SkillListStyleInterface>`
    position: relative;
    color: var(--grey-color);
    width: 150px;
    min-width: 150px;
    scale: 1;
    transform-origin: left;
    transition: scale 0.5s;

    &:hover {
        scale: 1.05;
    }

    &:hover ${Item} {
        background: radial-gradient(ellipse at top, ${(props) => props.$firstcolor}, ${(props) => props.$secondcolor});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:hover ${Colon} {
        color: ${(props) => props.$firstcolor};
    }

    &:hover ${Kor} {
        color: ${(props) => props.$firstcolor};
    }
`;

export const SkillListEleStyle = {
    Item,
    Colon,
    Kor,
    List,
};
