import styled from "styled-components";

const Style_Sub = styled.div`
    font-size: 1.19rem;
    margin-top: 8px;
`;

const Style_TodoSub = styled(Style_Sub)`
    p {
        font-size: calc(1em - 2px);
        color: #868686;
    }
`;

export const subDescription = {
    todoSub: (
        <Style_TodoSub>
            원티드 프리온보딩 사전과제 <br />
            <p>(원티드에서 약 6주 정도 진행한 교육 프로그램)</p>
        </Style_TodoSub>
    ),
    kanbanSub: <Style_Sub>부트캠프에서 진행한 파이널 프로젝트</Style_Sub>,
    blogSub: <Style_Sub>나만의 방식으로 개념을 정리하고 싶어서 시작한 블로그</Style_Sub>,
    portfolioSub: <Style_Sub>포트폴리오 프로젝트</Style_Sub>,
};
