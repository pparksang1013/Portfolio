import styled from "styled-components";
import { TabContentsStyleInterface } from "../type/skill_tab_type";

const Box = styled.div`
    position: relative;
`;

const TitleBox = styled.div<TabContentsStyleInterface>`
    display: flex;
    gap: 8px;

    & h4 {
        font-size: 2.4rem;
        font-weight: 900;
        color: ${(props) => props.$color};
        display: flex;
        align-items: center;
        font-family: "quicksilver";
        letter-spacing: 1px;
    }

    & span {
        font-size: 1.4rem;
        margin-top: 10px;
        font-weight: 900;
    }
`;

const Ul = styled.ul`
    margin: 1.2rem 0 0;
    gap: 8px 30px;
`;

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    border-top: 1px solid var(--grey-color);

    &:last-of-type {
        border-bottom: 1px solid var(--grey-color);
    }
`;

const LiTextBox = styled.div`
    display: flex;

    & h5 {
        font-size: 1.8rem;
        font-weight: 900;
        word-spacing: 2px;
        letter-spacing: -1px;
    }
`;

const Num = styled.span<TabContentsStyleInterface>`
    vertical-align: top;
    font-weight: 900;
    font-size: 1em;
    color: ${(props) => props.$color};
    display: inline-block;
    margin-left: 4px;
    -webkit-text-stroke: 1px;
`;

export const tabContentsStyle = {
    Box,
    TitleBox,
    Ul,
    Li,
    LiTextBox,
    Num,
};
