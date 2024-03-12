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
    background: linear-gradient(360deg, rgba(128, 181, 242, 1) 0%, rgba(128, 145, 242, 1) 100%);
`;
