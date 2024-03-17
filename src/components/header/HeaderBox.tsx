import styled from "styled-components";

export const HeaderBox = ({ children }: { children: React.ReactNode }) => {
    return <StyleHeaderBox>{children}</StyleHeaderBox>;
};

const StyleHeaderBox = styled.header`
    width: 1400px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    gap: 40px;
`;
