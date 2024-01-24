import styled from "styled-components";

const KanbanRole = () => {
    return (
        <Style_KanbanRole>
            <p>5명 팀(프론트3명 / 백엔드2명)</p>
            <p>팀리더</p>
            <p>프론트엔드 담당</p>
            <p>메인페이지, 대쉬보드, 캘린더페이지 UI 담당</p>
        </Style_KanbanRole>
    );
};

export const role = {
    todo: "개인 프로젝트",
    kanban: <KanbanRole />,
    blog: "개인 프로젝트",
    portfolio: "개인 프로젝트",
};

const Style_KanbanRole = styled.div`
    line-height: 1.62;
`;
