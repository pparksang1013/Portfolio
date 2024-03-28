import styled from "styled-components";
import { IStyleTabColor } from "../type";

const Box = styled.div`
    position: relative;
    height: 100%;

    & > span {
        font-size: 1.15em;
        color: var(--darkgrey-color);
        line-height: 2.6;
    }

    & img {
        position: absolute;
        bottom: 4px;
        right: 0;
    }
`;

const Title = styled.p<IStyleTabColor>`
    font-size: 2em;
    font-weight: 900;
    color: ${(props) => props.$color};
    padding-bottom: 4px;
    display: flex;
    align-items: center;
    font-family: "quicksilver";
`;

const BorderLine = styled.div<IStyleTabColor>`
    width: 9%;
    height: 14px;
    background-color: ${(props) => props.$color};
`;

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 1.2rem 0 0;
    gap: 8px 30px;
`;

const Li = styled.li`
    font-size: 1.8rem;
    font-weight: 900;
`;

const Num = styled.span<IStyleTabColor>`
    vertical-align: top;
    font-weight: 900;
    font-size: 0.4em;
    color: ${(props) => props.$color};
    display: inline-block;
    margin-left: 4px;
    -webkit-text-stroke: 1px;
`;

export const tabContentsStyle = {
    Box,
    Title,
    Ul,
    Li,
    Num,
    BorderLine,
};
