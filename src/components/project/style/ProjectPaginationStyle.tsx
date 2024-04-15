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
        -webkit-text-stroke: 1px var(--grey-color);
        padding-bottom: 2px;
        letter-spacing: 1.4px;

        &:hover {
            color: var(--orange-color);
            -webkit-text-stroke: 0px;
        }
    }
`;

const PrevIcon = styled(FaChevronLeft)`
    fill: var(--grey-color);
`;

const NextIcon = styled(FaChevronRight)`
    fill: var(--grey-color);
`;

const PrevBox = styled(CommonStyle)`
    position: absolute;
    left: 0;

    &:hover ${PrevIcon} {
        fill: var(--orange-color);
    }
`;

const NextBox = styled(CommonStyle)`
    position: absolute;
    right: 0;

    &:hover ${NextIcon} {
        fill: var(--orange-color);
    }
`;

export const paginationStyle = { Box, PrevBox, PrevIcon, NextBox, NextIcon };
