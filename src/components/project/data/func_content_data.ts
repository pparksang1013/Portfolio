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
