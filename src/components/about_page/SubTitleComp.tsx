import styled from "styled-components";

interface propInterface {
    character: string;
}

export const SubTitleComp = ({ character }: propInterface) => {
    return <Style_SubTitle>import {character} from "park sang min"</Style_SubTitle>;
};

const Style_SubTitle = styled.h3`
    width: fit-content;
`;
