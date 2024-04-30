import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Box = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    position: relative;
    margin-top: 30px;
`;

const CommonStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: transparent;
    cursor: pointer;

    span {
        font-family: "quicksilver";
        font-size: 1.2rem;
        color: var(--black-color);
        padding-bottom: 2px;
        letter-spacing: 1.4px;
    }

    &:hover span {
        color: var(--orange-color);
        -webkit-text-stroke: 1px var(--orange-color);
    }

    &:hover svg {
        fill: var(--orange-color);
    }
`;

const PrevBox = styled(CommonStyle)`
    position: absolute;
    left: 0;
`;

const NextBox = styled(CommonStyle)`
    position: absolute;
    right: 0;
`;

const PrevIcon = styled(FaChevronLeft)`
    fill: var(--black-color);
`;

const NextIcon = styled(FaChevronRight)`
    fill: var(--black-color);
`;

export const paginationStyle = { Box, PrevBox, PrevIcon, NextBox, NextIcon };
