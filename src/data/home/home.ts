interface IHomeData {
    id: number;
    title: string;
    index: number;
    link: string;
    img: IImg;
}

interface IImg {
    path: string;
    height: number;
}

export const homedata: IHomeData[] = [
    { id: 0, title: "ABOUT", index: 1, link: "/about", img: { path: "img/about.png", height: 40 } },
    { id: 1, title: "PROJECT", index: 2, link: "/project", img: { path: "img/project.png", height: 90 } },
    { id: 2, title: "CONTACT", index: 3, link: "/contact", img: { path: "img/contact.png", height: 30 } },
];
