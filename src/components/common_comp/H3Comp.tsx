import { styled } from "styled-components";

interface H3Interface {
    title: string;
    color: string;
}

function H3Comp({ title, color }: H3Interface) {
    return <Style_H3 color={color}>{title}</Style_H3>;
}

export default H3Comp;

const Style_H3 = styled.h3`
    font-size: 2.4rem;
    font-weight: 900;
    margin-bottom: 1.4rem;
    color: ${(props) => props.color};
`;
