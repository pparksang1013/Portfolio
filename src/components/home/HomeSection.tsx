import styled from "styled-components";

export const HomeSection = ({ children }: { children: React.ReactNode }) => {
    return <StyleHomeSec>{children}</StyleHomeSec>;
};

const StyleHomeSec = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;
