import { CommonComponents } from "../../common_comp/Index";
import styled from "styled-components";

function RepoComp({ repo }: { repo: string | undefined }) {
    return (
        <Style_RepoBox>
            {repo ? (
                <CommonComponents.H3Comp
                    title="REPOSITORY"
                    color="var(--primary-color)"
                    fontsize="0.84rem"
                    marginTop="3rem"
                />
            ) : (
                ""
            )}

            {repo ? <CommonComponents.GitLinkComp href={repo} size={34} color="#ff6c4f" /> : <></>}
        </Style_RepoBox>
    );
}

export default RepoComp;

const Style_RepoBox = styled.div`
    padding: 10px;
`;
