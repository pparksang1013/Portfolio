interface IHeaderData {
    id: string;
    link: string;
    title: string;
}

export const headerdata: IHeaderData[] = [
    { id: "ABOUT", link: "/about", title: "어바웃" },
    { id: "PROJECT", link: "/project", title: "프로젝트" },
    { id: "CONTACT", link: "/contact", title: "컨택트" },
];
