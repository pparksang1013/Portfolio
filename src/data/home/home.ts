interface IHomeData {
    id: number;
    title: string;
    index: number;
    link: string;
}

export const homedata: IHomeData[] = [
    { id: 0, title: "ABOUT", index: 1, link: "/about" },
    { id: 1, title: "PROJECT", index: 2, link: "/project" },
    { id: 2, title: "CONTACT", index: 3, link: "/contact" },
];
