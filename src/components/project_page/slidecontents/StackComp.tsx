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

import styled from "styled-components";

const Common_Icon = styled.div`
    width: 1.7rem;
    height: 1.7rem;
    color: #646b69;
`;

const Style_React = styled(Common_Icon).attrs({ as: FaReact })``;

const Style_Router = styled(Common_Icon).attrs({ as: SiReactrouter })``;

const Styled_Components = styled(Common_Icon).attrs({ as: SiStyledcomponents })``;

const Style_Axios = styled(Common_Icon).attrs({ as: SiAxios })``;

const Style_Git = styled(Common_Icon).attrs({ as: FaGitAlt })``;

const Style_Next = styled(Common_Icon).attrs({ as: SiNextdotjs })``;

const Style_Typescript = styled(Common_Icon).attrs({ as: SiTypescript })``;

const Style_CSS = styled(Common_Icon).attrs({ as: SiCss3 })``;

const Style_Framer = styled(Common_Icon).attrs({ as: SiFramer })``;

const Style_Vite = styled(Common_Icon).attrs({ as: SiVite })``;

const Style_Netlify = styled(Common_Icon).attrs({ as: SiNetlify })``;

function StackComp({ stack }: { stack: keyof stack_type }) {
    const STACK_ICON_OBJ: stack_type = {
        todo: [<Style_React />, <Style_Router />, <Styled_Components />, <Style_Axios />, <Style_Netlify />],
        kanban: [<Style_React />, <Style_Git />, <Styled_Components />],
        blog: [<Style_Next />, <Style_Typescript />, <Style_CSS />],
        portfolio: [<Style_React />, <Style_Typescript />, <Styled_Components />, <Style_Framer />, <Style_Vite />],
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
