import styled from "styled-components";
import { motion } from "framer-motion";
import { TabStyleInterface } from "../../../type/tab_type";

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    padding-top: 110px;
    column-gap: 28px;
`;

const Li = styled.li<TabStyleInterface>`
    font-size: 1.3em;
    font-weight: 900;
    color: ${(props) => (props.$active ? "var(--black-color)" : "#d0d0d0")};
    cursor: pointer;
    position: relative;

    &:hover {
        color: var(--black-color);
    }
`;

const Underline = styled(motion.div)`
    position: relative;
    left: 50%;
    translate: -50% 2px;
    width: 95%;
    height: 4px;
    background-color: var(--black-color);
    border-radius: 20px;
`;

const Contents = styled.div`
    margin: 0 auto;
    width: 650px;
    margin-top: 20px;
`;

export const projectTabStyle = {
    Ul,
    Li,
    Underline,
    Contents,
};
