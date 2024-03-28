import styled from "styled-components";

export const Highlight = ({ children }: { children: React.ReactNode }) => {
    return <StyleHighlight>{children}</StyleHighlight>;
};

const StyleHighlight = styled.b`
    color: var(--primary-color);
`;
