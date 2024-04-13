import styled from "styled-components";

const Box = styled.div`
    padding: 16px;
    border: 1.5px solid rgba(var(--darkgrey-rgb), 0.2);
    border-radius: 6px;
    margin: 1rem 0;
    background-color: rgba(var(--darkgrey-rgb), 0.06);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04), -2px -2px 4px rgba(0, 0, 0, 0.04);

    &:hover {
        border: 1.5px solid rgba(var(--primary-rgb), 1);
    }
`;

const Title = styled.h5`
    font-size: 1.2em;
    margin-bottom: 6px;
    color: #26150c;
`;

const Ul = styled.ul`
    margin-top: 4px;
`;

const Li = styled.li`
    position: relative;
    line-height: 1.6;
    margin-bottom: 8px;
    word-spacing: 1px;

    &:last-of-type {
        margin-bottom: 0;
    }

    &::before {
        content: "";
        width: 5px;
        height: 5px;
        background-color: rgba(var(--primary-rgb), 0.2);
        border: 1px solid var(--primary-color);
        display: inline-block;
        margin-right: 8px;
        border-radius: 50%;
        vertical-align: middle;
    }
`;

export const funcContentStyle = {
    Box,
    Title,
    Ul,
    Li,
};
