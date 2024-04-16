import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavColorInterface } from "../type/header_nav_type";

const Ul = styled.ul`
    display: flex;
    gap: 18px;
    align-items: flex-end;
    height: 100%;
    font-weight: 900;
    padding-bottom: 4px;
    font-size: 1.1rem;
`;

const NavLink = styled(Link)<NavColorInterface>`
    color: #d6d6d6;

    &:visited {
        color: ${(props) => (props.$textcolor ? "var(--primary-color)" : "#d6d6d6")};
    }

    &:hover {
        color: ${(props) => (props.$textcolor ? "var(--primary-color)" : "var(--black-color)")};
    }
`;

export const HeaderNavStyle = {
    Ul,
    NavLink,
};
