import styled from "styled-components";

export const AboutBox = ({ children }: { children: React.ReactNode }) => {
    return <StyleAboutBox>{children}</StyleAboutBox>;
};

const StyleAboutBox = styled.section`
    color: var(--black-color);
`;
