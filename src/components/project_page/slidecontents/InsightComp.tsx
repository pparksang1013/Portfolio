import styled from "styled-components";

// TYPE
import { insight_interface } from "../../../types/insight";

// COMPONENTS
import { CommonComponents } from "../../common_comp/Index";

// 🔥 TODO INSIGHT
function TodoInsight() {
    return (
        <>
            <CommonComponents.InsightTitle title="로그인" i="01." />
            <Style_P>유효성 검사 기능을 통한 회원가입 기능과 로그인 구현을 구현했습니다.</Style_P>

            <Style_P>로그인이 완료되면 local storage에 저장하는 기능 구현을 구현했습니다.</Style_P>

            <CommonComponents.InsightTitle title="Axios" i="02." eng />
            <Style_P>
                회원가입과 로그인 버튼을 누르면 axios를 통해 사전과제에서 주어진 API 주소와 통신하는 기능 구현했습니다.
            </Style_P>

            <CommonComponents.InsightTitle title="리다이렉트" i="03." />
            <Style_P>React router dom 라이브러리를 사용해 로그인 여부에 따라 리다이렉트 기능 구현했습니다.</Style_P>

            <CommonComponents.InsightTitle title="투두리스트" i="04." />
            <Style_P>투두리스트 CRUD기능을 구현했습니다.</Style_P>
        </>
    );
}

// 🔥 KANBAN INSIGHT
function KanbanInsight() {
    return (
        <>
            <CommonComponents.InsightTitle title="리렌더링 이슈🔥" i="01." />
            <Style_P>
                Input에서 값을 받아 키보드이벤트로 Enter를 치면 Axios를 통해 서버에 값을 전달해주고, State를 변경해주는
                로직을 구현했습니다.
            </Style_P>

            <Style_P>
                그러나 이 과정에서 예상과 다르게 컴포넌트가 Rerendering 되지않는{" "}
                <CommonComponents.Highlight>문제가 발생</CommonComponents.Highlight>했습니다.
            </Style_P>

            <Style_P>
                이 문제를 해결하기 위한 방법은 State에서 데이터를 관리하는 객체를 갱신할 때, 새로운 객체를 생성하는
                방법을 사용했습니다. 원래는 객체 내부의 데이터만 변경했지만, 이 방법은 Rerendering을 유발하지
                못했습니다. 스프레드 연산자를 사용하여 새로운 객체를 생성하면서 재렌더링 될 수 있었고, 이 문제를 통해
                객체 불변성의 중요성을 배울 수 있었습니다.
            </Style_P>

            <CommonComponents.InsightTitle title="Git" i="02." eng />
            <Style_P>
                레포지토리를 두 번 파야하는 사고가 있었지만, 이 경험을 통해 Git을 사용하는데 많이 익숙해질 수
                있었습니다.
            </Style_P>

            <CommonComponents.InsightTitle title="커밋컨벤션" i="03." />
            <Style_P>
                Pull request를 받을 때, 팀원들이 무슨 작업을 했는지 확인하는 시간을 줄이기 위해 커밋컨벤션 템플릿을
                작성했습니다. 커밋컨벤션을 통해 어떤 작업이 이루어졌는지 확인할 수 있어 팀원들과 의사소통을 효율적으로
                할 수 있었습니다.
            </Style_P>

            <Style_P>
                이러한 계기로 개인 프로젝트를 진행 할 때, 커밋컨벤션을 꾸준히 작성하고 있습니다. 커밋 컨벤션을 통해 어떤
                작업을 수행했는지 명확하게 파악할 수 있고, 프로젝트 관리에 있어서 매우 유용하게 사용하고 있습니다.
            </Style_P>
        </>
    );
}

// 🔥 BLOG INSIGHT
function BlogInsight() {
    return (
        <>
            <CommonComponents.InsightTitle title="NEXT" i="01." eng />
            <Style_P>Nextjs 기본 개념을 학습했습니다.</Style_P>

            <CommonComponents.InsightTitle title="SSR" i="02." eng />
            <Style_P>SSR과 CSR 개념을 학습했습니다.</Style_P>

            <CommonComponents.InsightTitle title="타입스크립트" i="03." />
            <Style_P>타입스크립트 기본 개념을 학습했습니다.</Style_P>

            <CommonComponents.InsightTitle title="CSS ISSUE🔥" i="04." eng />
            <Style_P>
                메인페이지에서 포스팅 페이지 경로로 이동 후 메인페이지로 돌아왔을 때 CSS가 깨지는{" "}
                <CommonComponents.Highlight>문제가 발생</CommonComponents.Highlight> 했습니다.
            </Style_P>

            <Style_P>
                문제는 두 개의 CSS 파일에서 p 태그에 대한 전역 스타일 설정이 겹쳤고, 이로 인해 메인페이지에서 포스팅
                페이지의 CSS가 적용되어 발생한 문제였습니다.
            </Style_P>

            <Style_P>
                이 문제를 해결하기 위해 포스팅 페이지에 다른 ID 값을 부여하여 CSS를 구분하였습니다. 이를 통해 CSS를
                사용할 때 ID와 Class의 값의 중요성을 실감했습니다.
            </Style_P>

            <CommonComponents.InsightTitle title="Pre tag ISSUE🔥" i="05." eng />
            <Style_P>포스팅 페이지에서 Code를 표시하기 위해 pre tag를 사용했습니다.</Style_P>

            <Style_P>
                pre 태그에 max-width CSS 속성을 설정했음에도 불구하고, pre 태그가 부모 요소보다 더 큰 너비 값을 가지는{" "}
                <CommonComponents.Highlight>문제가 발생</CommonComponents.Highlight>
                했습니다.
            </Style_P>

            <Style_P>문제를 해결하기 위해 pre 태그에 white-space: pre-wrap 옵션을 적용하여 해결하였습니다.</Style_P>
        </>
    );
}

// 🔥 PORTFOLIO INSIGHT
function PortfolioInsight() {
    return (
        <>
            <CommonComponents.InsightTitle title="Framer motion" i="01." eng />
            <Style_P>Framer motion 라이브러리 기본 개념을 학습했습니다.</Style_P>

            <Style_P>Framer motion을 사용해 Slide 기능을 구현했습니다.</Style_P>
        </>
    );
}

function InsightComp({ insight }: { insight: keyof insight_interface }) {
    const INSIGHT_OBJ: insight_interface = {
        todo: <TodoInsight />,
        kanban: <KanbanInsight />,
        blog: <BlogInsight />,
        portfolio: <PortfolioInsight />,
    };

    return (
        <Style_InsightBox>
            <CommonComponents.H3Comp title="INSIGHT" color="var(--primary-color)" fontsize="0.84rem" />
            {INSIGHT_OBJ[insight]}
        </Style_InsightBox>
    );
}

export default InsightComp;

const Style_InsightBox = styled.div`
    padding: 4px 6px;
    background-color: #fff;
    border-radius: 6px;
    height: 100%;
`;

const Style_P = styled.p`
    line-height: 1.58;
    margin-bottom: 6px;
    font-size: 0.92em;

    &::before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: #a0a8a3;
        border-radius: 50%;
        margin: 0 6px 6px;
        vertical-align: middle;
    }
`;
