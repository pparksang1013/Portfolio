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
    kanbanStack: (React.ReactElement | string)[];
    blogStack: (React.ReactElement | string)[];
    portfolioStack: React.ReactElement[];
};

const Common_Icon = styled.div`
    width: 24px;
    height: 24px;
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
    color: var(--black-color);
`;

export const stacks: StacksType = {
    todoStack: [<Styled_react />, <Styled_router />, <Styled_components />, <Styled_axios />],
    kanbanStack: [<Styled_react />, <Styled_git />, "apexcharts"],
    blogStack: [<Styled_next />, <Styled_typescript />, <Styled_css />, "contentlayer"],
    portfolioStack: [
        <Styled_react />,
        <Styled_typescript />,
        <Styled_components />,
        <Styled_framer />,
        <Styled_vite />,
    ],
};
