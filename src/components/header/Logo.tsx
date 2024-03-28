import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <StyleLogo>
            <Link to="/">PARKSANGMIN</Link>
        </StyleLogo>
    );
};

const StyleLogo = styled.div`
    font-family: "quickitalic";
    font-size: 3rem;
    margin-left: 12rem;
`;
