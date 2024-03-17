import styled from "styled-components";
import { headerdata } from "../../data/header/header";
import { Link } from "react-router-dom";

interface ITextColor {
    textColor: boolean;
}

export const HeaderNav = ({ path }: { path: string }) => {
    const navItem = headerdata.map((ele) => {
        const isCurrentPath = path === ele.link;

        return (
            <li key={ele.id}>
                <StyleListLink to={ele.link} textColor={isCurrentPath}>
                    {ele.title}
                </StyleListLink>
            </li>
        );
    });
    return (
        <nav>
            <StyleUl>{navItem}</StyleUl>
        </nav>
    );
};

const StyleUl = styled.ul`
    display: flex;
    gap: 18px;
    align-items: flex-end;
    height: 100%;
    font-weight: 900;
    padding-bottom: 4px;
    font-size: 1.1rem;
`;

const StyleListLink = styled(Link)<ITextColor>`
    &:visited {
        color: ${(props) => (props.textColor ? "var(--primary-color)" : "#d6d6d6")};
    }

    &:hover {
        color: ${(props) => (props.textColor ? "var(--primary-color)" : "var(--dark-primary)")};
    }
`;
