import styled from "styled-components";

import { TabStyleInterface } from "../../../type/tab_type";

const Box = styled.div`
    width: 100%;
    background-color: rgba(251, 251, 251, 1);
    margin-bottom: 100px;
`;

const Ul = styled.ul`
    display: flex;
    margin-bottom: 1rem;
`;

const Li = styled.li<TabStyleInterface>`
    font-size: 0.9em;
    padding: 0 18px 0 0;
    color: ${(props) => (props.$active ? "var(--black-color)" : "#d0d0d0")};
    cursor: pointer;

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
        font-weight: 900;
    }
`;

const Contents = styled.div`
    margin-bottom: 1rem;
    border-radius: 6px;
`;

export const skillTabStyle = {
    Box,
    Ul,
    Li,
    Contents,
};
