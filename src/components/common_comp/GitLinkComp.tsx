import { FaGithub } from "react-icons/fa6";
import styled from "styled-components";

function GitLinkComp({ href, size, color }: { href: string; size: number; color?: string }) {
    return (
        <Style_Git href={href} target="_blank" color={color}>
            <FaGithub size={size} />
        </Style_Git>
    );
}

export default GitLinkComp;

const Style_Git = styled.a`
    display: inline-block;
    color: ${(props) => props.color};
`;
