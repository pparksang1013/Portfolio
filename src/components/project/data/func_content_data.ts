import { FuncContentTypeInterface } from "../type/func_content_type";

export const TODO_FUNC_CONTENTS_DATA: FuncContentTypeInterface[] = [
    {
        title: "로그인 / 회원가입 양식 유효성 검사",
        details: ["useState와 useRef를 활용하여 회원가입 및 로그인 양식의 유효성 검사 기능을 구현."],
    },
    {
        title: "API 통신",
        details: [
            "Axios 라이브러리를 사용하여 원티드에서 제공한 API 주소로 요청을 보내고 응답을 받음.",
            "응답받은 JWT토근을 브라우저 로컬스토리지에 저장.",
            "투두리스트 페이지에서 리스트의 생성, 삭제, 수정이 발생할 때마다 데이터가 실시간으로 전송.",
        ],
    },
    {
        title: "리다이렉트",
        details: [
            "react router dom 라이브러리 useNavigate hook을 사용해 리다이렉트를 구현.",
            "회원가입 페이지에서 회원가입 완료 후 로그인 페이지로 라우팅하는 기능을 구현.",
            "브라우저 로컬스토리지에 JWT토큰 값이 없는 상태로 투두리스트 페이지에 접속하면 회원가입 페이지로 라우팅 되는 기능 구현.",
            "브라우저 로컬스토리지에 JWT토큰 값이 있는 상태로 회원가입/로그인 페이지에 접속하면 투두리스트 페이지로 라우팅 되는 기능 구현.",
        ],
    },
    {
        title: "투두리스트 페이지 데이터 렌더링",
        details: [
            "투두리스트 페이지에 접속 시, useEffect를 사용해 저장된 리스트를 즉시 보여주도록 구현.",
            "새로운 투두리스트를 추가 후 새로고침 시, 추가된 항목이 표시되도록 구현.",
        ],
    },
    {
        title: "투두리스트 Update / Delete",
        details: [
            "자바스크립트 메서드를 통해 리스트 update, delete를 구현.",
            "Update: findIndex와 splice 메서드를 통해 리스트 수정기능 구현.",
            "Delete: filter 메서드를 통해 리스트 삭제기능 구현.",
        ],
    },
    {
        title: "JWT 토큰",
        details: [
            "axios 라이브러리 interceptors.request.use메서드를 사용하여 모든 HTTP요청에 JWT 인증 토큰을 추가하는 로직 구현.",
        ],
    },
];

export const KANBAN_FUNC_CONTENTS_DATA: FuncContentTypeInterface[] = [
    {
        title: "종합적인 CRUD 기능",
        details: [
            "칸반보드의 핵심 요소인 card와 task를 위한 종합적인 CRUD 시스템 구축.",
            "axios 라이브러리를 활용하여 HTTP 메서드 기반의 CRUD 구현.",
            "다양한 컴포넌트에서 사용하기 위해 HTTP 메서드를 모듈화하여 코드의 재사용성과 유지보수성 향상.",
        ],
    },
    {
        title: "async / await",
        details: ["async / await을 사용해 서버로부터 응답을 받은 후 페이지 렌더링이 이루어지도록 구현."],
    },
    {
        title: "proxy 설정",
        details: ["http-proxy-middleware 라이브러리 createProxyMiddleware 함수를 사용해 proxy 설정."],
    },
    {
        title: "캘린더 페이지",
        details: [
            "react-calendar 라이브러리를 사용해 캘린더 페이지 구현.",
            "캘린더 페이지에서 일정이 있는 날짜는 Mark되는 기능 구현.",
        ],
    },
    {
        title: "대쉬보드 페이지",
        details: ["apexcharts 라이브러리를 사용해 대쉬보드 페이지 구현."],
    },
    {
        title: "Github를 통한 프로젝트 형상관리",
        details: [
            "팀 리더로서 GitHub를 통한 프로젝트 형상 관리에 있어 fork 기능으로 팀원들의 코드를 관리하고, 코드 병합 및 검토를 위해 pull request 기능을 적극 활용.",
        ],
    },
];

export const BLOG_FUNC_CONTENTS_DATA: FuncContentTypeInterface[] = [
    {
        title: "포스팅 정적 생성",
        details: ["Next.js의 generateStaticParams 함수를 사용해 블로그 포스팅을 위한 정적 페이지 생성."],
    },
    {
        title: "Contentlayer 라이브러리",
        details: [
            "MDX 파일로 작성한 블로그 포스팅 파일을 효율적으로 관리하기 위해 Contentlayer 라이브러리를 사용.",
            "useMDXComponent hook을 사용해 커스텀 리액트 컴포넌트 사용. 이를 통해, MDX에서 작성한 내용에 대한 스타일링을 자유자재로 표현할 수 있었고, 사용되는 레이아웃이나 컴포넌트 재사용.",
        ],
    },
    {
        title: "포스팅 검색 기능",
        details: [
            "자바스크립트 메서드와 react useState를 통해 검색기능 구현.",
            "Contentlayer에서 제공하는 객체를 활용하여 filter 메서드를 이용한 검색 기능.",
            "input 필드에 값이 입력될 때, useState를 사용하여 input 필드 아래에 검색 결과를 표시하는 기능 구현.",
        ],
    },
    {
        title: "Next app 디렉토리",
        details: [
            "Next.js의 app 디렉토리 사용.",
            "파일 기반 라우팅과 동적 라우팅 구현.",
            "layout.tsx 파일을 통해 공통 UI 컴포넌트를 관리 및 재사용.",
        ],
    },
    {
        title: "MDX",
        details: [
            "MDX metadata를 활용해 포스팅을 효율적으로 관리.",
            "React.Children.toArray를 활용하여 MDX 파일 내의 h2태그를 filter 메서드를 추출했고, 이를 통해 contents 기능 구현.",
        ],
    },
];

export const PORTFOLIO_FUNC_CONTENTS_DATA: FuncContentTypeInterface[] = [
    {
        title: "애니메이션",
        details: [
            "Framer Motion 라이브러리의 기본 기능과 Hook을 활용해 애니메이션 구현.",
            "스크롤 애니메이션: useTransform과 whileInView 기능을 통해 스크롤 애니메이션 구현.",
            "탭메뉴 애니메이션: Layout Animation 기능을 활용하여, 탭 메뉴 간 이동 시 언더라인이 부드럽게 움직이는 인터랙티브 애니메이션을 구현.",
            "슬라이드 기능: 현재 버전에서는 사용되지 않지만, Version 1에서는 useMotionValue와 drag 이벤트를 활용하여 슬라이드 기능 구현 ",
        ],
    },
    {
        title: "아키텍쳐",
        details: [
            "구독중인 개발 유튜브를 통해 FSD 아키텍처 구조를 학습하고, 그 영감을 바탕으로 컴포넌트 구성.",
            "아키텍처를 체계적으로 구성한 결과, 유지보수 과정을 대폭 간소화 시킬 수 있었고, 시스템의 수정이나 기능 추가 시에 발생할 수 있는 복잡성을 크게 줄일 수 있었음.",
        ],
    },
    {
        title: "사용자 경험 향상",
        details: [
            "정보를 빠르고 효율적으로 찾을 수 있도록 라우팅 기능을 활용.",
            "프로젝트에 대한 내용 혹은 기술 스택 등 다양한 내용을 한눈에 파악하기 쉽고 가독성이 높은 형태로 제공하기 위해 탭메뉴를 구현.",
            "프로젝트 페이지에 많은 내용이 있어 웹페이지가 길어지고, 이로 인해 상단의 프로젝트 탭 메뉴까지 다시 올라가는 것이 사용자 경험을 저해할 수 있다고 판단했습니다. 이 문제를 해결하기 위해, 페이지의 마지막 부분에 페이지네이션 기능을 추가하여 사용자가 이전 또는 다음 프로젝트로 쉽게 이동할 수 있도록 구현.",
            "프로젝트 탭 메뉴를 통해 탭 간 이동 시, 웹페이지가 스크롤 위치 0부터 다시 렌더링되어 사용자가 내용을 더 쉽게 읽을 수 있도록 구현",
        ],
    },
    {
        title: "버젼 관리",
        details: [
            "SemVer 규약을 통해 버전관리.",
            "피드백을 통해 포트폴리오를 개선할 필요성을 느꼈고, 전 Version보다 더 체계적인 관리를 위해 버젼 관리에 대한  내용을 학습.",
            "버전 관리 내용을 package.json의 description 필드와 커밋 메시지 컨벤션에 적용함으로써 프로젝트의 내용 파악 용이.",
        ],
    },
    {
        title: "타입 관리",
        details: [
            "프로젝트의 타입 관리를 효과적으로 수행하기 위해, 모든 인터페이스들을 'type' 디렉토리 내에 체계적으로 정리하여 타입스크립트 활용.",
            "구조화를 통해 코드의 가독성과 유지보수성을 대폭 향상시켰으며, 개발 과정에서 타입의 일관성 및 안정성 보장.",
        ],
    },
];
