import { ISkillTab, ITabContentsData } from "../../components/about/type";

export const skillTabData: ISkillTab[] = [
    { id: 0, title: "자바스크립트" },
    { id: 1, title: "리액트" },
];

export const tabContentsData: ITabContentsData = {
    js: {
        contents: [
            { number: "01", title: "실행 컨텍스트" },
            { number: "02", title: "호이스팅" },
            { number: "03", title: "클로저" },
            { number: "04", title: "This" },
        ],
        image: "/img/tab_object_js.png",
    },
    react: {
        contents: [
            { number: "01", title: "useState" },
            { number: "02", title: "useEffect" },
            { number: "03", title: "useRef" },
            { number: "04", title: "리렌더링" },
        ],
        image: "/img/tab_object_react.png",
    },
};
