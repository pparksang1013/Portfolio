import styled from "styled-components";

interface StyleProps {
    $eng?: string;
}

function InsightTitle({ title, i, eng }: { title: string; i: string; eng?: string }) {
    return (
        <Style_Box>
            <Style_InsightIndex>{i}</Style_InsightIndex>
            <Style_InsightTitle $eng={eng}>{title}</Style_InsightTitle>
        </Style_Box>
    );
}

export default InsightTitle;

const Style_Box = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 2rem 0 0.4rem;

    &:first-of-type {
        margin: 0 0 0.4rem;
    }
`;

const Style_InsightIndex = styled.span`
    font-size: 1.1rem;
    -webkit-text-stroke: 1.4px;
    color: var(--primary-color);
    font-weight: 900;
    letter-spacing: 1.1px;
`;

const Style_InsightTitle = styled.h4<StyleProps>`
    color: var(--black_color);
    font-size: 1.1rem;
    font-weight: 800;
    width: fit-content;
    margin-left: 4px;
    text-transform: uppercase;
    -webkit-text-stroke: ${(props) => (props.$eng ? "1.2px" : "0.5px")};
`;
