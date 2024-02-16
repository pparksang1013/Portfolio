import { styled } from "styled-components";

interface H3Interface {
    title?: string;
    color: string;
    fontsize: string;
    stroke?: boolean;
    marginTop?: string | undefined;
}

function H3Comp({ title, color, fontsize, stroke, marginTop }: H3Interface) {
    return (
        <Style_H3 color={color} fontsize={fontsize} stroke={stroke} marginTop={marginTop}>
            {title}
        </Style_H3>
    );
}

export default H3Comp;

const Style_H3 = styled.h3<H3Interface>`
    font-size: ${(props) => props.fontsize};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: 0.6rem;
    font-family: "akira";
    color: ${(props) => props.color};
    -webkit-text-stroke: ${(props) => (props.stroke ? "1.6px" : "none")};
`;
