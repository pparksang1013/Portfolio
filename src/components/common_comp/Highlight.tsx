import styled from "styled-components";

function Highlight({ children }: { children: React.ReactNode }) {
    return <Style_Highlight>{children}</Style_Highlight>;
}

export default Highlight;

const Style_Highlight = styled.strong`
    font-size: 1.03em;
    -webkit-text-stroke: 0.7px;
    text-decoration: underline 3px rgba(var(--primary-rgb), 0.8);
`;
