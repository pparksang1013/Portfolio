import { styled } from "styled-components";
import { title_interface } from "../../../types/title";
import { CommonComponents } from "../../common_comp/Index";

function TodoTitle({ title }: { title: string }) {
    return (
        <Style_ProjectTitle>
            <h2>{title}</h2>

            <Style_ProjectDescription>
                <li>
                    원티드 프리온보딩 사전과제
                    <span>(원티드에서 약 6주 정도 진행한 교육 프로그램)</span>
                </li>
            </Style_ProjectDescription>
        </Style_ProjectTitle>
    );
}

function KanbanTitle({ title }: { title: string }) {
    return (
        <Style_ProjectTitle>
            <h2>{title}</h2>

            <Style_ProjectDescription>
                <li>부트캠프에서 진행한 파이널 프로젝트</li>
                <li>총 5의 멤버로 진행됐고, 팀은 프론트엔드 3명과 백엔드 2명으로 구성됐습니다.</li>
                <li>
                    <CommonComponents.Highlight>팀리더</CommonComponents.Highlight>를 맡았습니다.
                </li>
                <li>저는 프론트엔드로 참여했고, 메인페이지, 대시보드, 캘린더페이지를 담당했습니다.</li>
            </Style_ProjectDescription>
        </Style_ProjectTitle>
    );
}

function BlogTitle({ title }: { title: string }) {
    return (
        <Style_ProjectTitle>
            <h2>{title}</h2>

            <Style_ProjectDescription>
                <li>나만의 방식으로 개념을 정리하고 싶어서 시작한 블로그</li>
            </Style_ProjectDescription>
        </Style_ProjectTitle>
    );
}

function PortfolioTitle({ title }: { title: string }) {
    return (
        <Style_ProjectTitle>
            <h2>{title}</h2>

            <Style_ProjectDescription>
                <li>포트폴리오 웹페이지</li>
                <li>컴포넌트 구조가 이해하기 쉽게 구성하려고 노력했습니다.</li>
                <li>좋은 아키텍쳐란 무엇인가? 라는 고민을 했던 프로젝트</li>
            </Style_ProjectDescription>
        </Style_ProjectTitle>
    );
}

function ProjectTitleComp({ title, id }: { title: string; id: keyof title_interface }) {
    const TITLE_OBJ: title_interface = {
        todo: <TodoTitle title={title} />,
        kanban: <KanbanTitle title={title} />,
        blog: <BlogTitle title={title} />,
        portfolio: <PortfolioTitle title={title} />,
    };

    return <>{TITLE_OBJ[id]}</>;
}

export default ProjectTitleComp;

const Style_ProjectTitle = styled.div`
    border-radius: 6px;
    padding: 6px 10px 30px;

    h2 {
        font-size: 2.6rem;
        font-weight: 900;

        &::after {
            content: "";
            display: inline-block;
            border-radius: 50%;
            margin-left: 6px;
            width: 10px;
            height: 10px;
            background-color: rgba(36, 211, 177, 1);
        }
    }
`;

const Style_ProjectDescription = styled.ul`
    margin-top: 4px;

    li {
        position: relative;
        word-break: keep-all;
        margin-bottom: 5px;
        line-height: 1.52;

        span {
            color: #8e8e8e;
            font-size: calc(1em - 0.1rem);
            padding-left: 4px;
        }

        &::before {
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #a0a8a3;
            border-radius: 50%;
            margin: 0 6px 6px;
            vertical-align: middle;
        }
    }
`;
