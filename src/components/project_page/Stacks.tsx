import { FaReact } from "react-icons/fa";
import {
    SiReactrouter,
    SiAxios,
    SiStyledcomponents,
    SiNextdotjs,
    SiTypescript,
    SiCss3,
    SiFramer,
    SiVite,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import styled from "styled-components";

type StacksType = {
    todoStack: React.ReactElement[];
    kanbanStack: React.ReactElement[];
    blogStack: React.ReactElement[];
    portfolioStack: React.ReactElement[];
};

const Common_Icon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
`;

const Styled_react = styled(Common_Icon).attrs({ as: FaReact })`
    color: #61dafb;
`;

const Styled_router = styled(Common_Icon).attrs({ as: SiReactrouter })`
    color: #61dafb;
`;

const Styled_components = styled(Common_Icon).attrs({ as: SiStyledcomponents })`
    color: #db7093;
`;

const Styled_axios = styled(Common_Icon).attrs({ as: SiAxios })`
    color: var(--black-color);
`;

const Styled_git = styled(Common_Icon).attrs({ as: FaGitAlt })`
    color: #f1502f;
`;

const Styled_next = styled(Common_Icon).attrs({ as: SiNextdotjs })`
    color: var(--black-color);
`;

const Styled_typescript = styled(Common_Icon).attrs({ as: SiTypescript })`
    color: #3178c6;
`;

const Styled_css = styled(Common_Icon).attrs({ as: SiCss3 })`
    color: #1c31de;
`;

const Styled_framer = styled(Common_Icon).attrs({ as: SiFramer })`
    color: var(--black-color);
`;

const Styled_vite = styled(Common_Icon).attrs({ as: SiVite })`
    color: #ffd529;
`;

const NoIcon = styled.span`
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-family: "akira";
`;

export const stacks: StacksType = {
    todoStack: [<Styled_react />, <Styled_router />, <Styled_components />, <Styled_axios />],
    kanbanStack: [<Styled_react />, <Styled_git />, <NoIcon>apexchart</NoIcon>],
    blogStack: [<Styled_next />, <Styled_typescript />, <Styled_css />, <NoIcon>contentlayer</NoIcon>],
    portfolioStack: [
        <Styled_react />,
        <Styled_typescript />,
        <Styled_components />,
        <Styled_framer />,
        <Styled_vite />,
    ],
};
