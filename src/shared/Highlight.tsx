import styled from "styled-components";

export interface HighlightStyleInterface {
    $textcolor?: string;
}

export const Highlight = ({ children, textcolor }: { children: React.ReactNode; textcolor?: string }) => {
    return <StyleHighlight $textcolor={textcolor}>{children}</StyleHighlight>;
};

const StyleHighlight = styled.b<HighlightStyleInterface>`
    color: ${(props) => (props.$textcolor ? props.$textcolor : `var(--primary-color)`)};
`;
