import styled from "styled-components";

// REACT ICONS
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
    SiNetlify,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

// TYPE
import { stack_type } from "../../../types/stack";

// COMPONENTS
import { CommonComponents } from "../../common_comp/Index";

const Common_Icon = styled.div`
    width: 1.7rem;
    height: 1.7rem;
    color: #646b69;
`;

const React = styled(Common_Icon).attrs({ as: FaReact })``;

const Router = styled(Common_Icon).attrs({ as: SiReactrouter })``;

const Styled_Components = styled(Common_Icon).attrs({ as: SiStyledcomponents })``;

const Axios = styled(Common_Icon).attrs({ as: SiAxios })``;

const Git = styled(Common_Icon).attrs({ as: FaGitAlt })``;

const Next = styled(Common_Icon).attrs({ as: SiNextdotjs })``;

const Typescript = styled(Common_Icon).attrs({ as: SiTypescript })``;

const CSS = styled(Common_Icon).attrs({ as: SiCss3 })``;

const Framer = styled(Common_Icon).attrs({ as: SiFramer })``;

const Vite = styled(Common_Icon).attrs({ as: SiVite })``;

const Netlify = styled(Common_Icon).attrs({ as: SiNetlify })``;

function StackComp({ stack }: { stack: keyof stack_type }) {
    const STACK_ICON_OBJ: stack_type = {
        todo: [
            <React key={1} />,
            <Router key={2} />,
            <Styled_Components key={3} />,
            <Axios key={4} />,
            <Netlify key={5} />,
        ],
        kanban: [<React key={1} />, <Git key={2} />, <Styled_Components key={3} />],
        blog: [<Next key={1} />, <Typescript key={2} />, <CSS key={3} />],
        portfolio: [
            <React key={1} />,
            <Typescript key={2} />,
            <Styled_Components key={3} />,
            <Framer key={4} />,
            <Vite key={5} />,
        ],
    };

    return (
        <Style_Stack>
            <CommonComponents.H3Comp title="STACK" color="var(--primary-color)" fontsize="0.84rem" />
            {STACK_ICON_OBJ[stack].map((ele) => ele)}
        </Style_Stack>
    );
}

export default StackComp;

const Style_Stack = styled.div`
    padding: 10px;

    svg {
        display: inline-block;
        margin-right: 14px;
        background-color: #fff;
    }
`;
