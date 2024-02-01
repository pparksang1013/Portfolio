import { FaGithub } from "react-icons/fa6";

function GitLinkComp({ href }: { href: string }) {
    return (
        <a href={href} target="_blank">
            <FaGithub size={120} />
        </a>
    );
}

export default GitLinkComp;
