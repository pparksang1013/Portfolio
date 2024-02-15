interface ProjectType {
    id: string;
    title: string;
}

export const projects_data: ProjectType[] = [
    {
        id: "todo",
        title: "로그인 & 투두리스트",
    },
    {
        id: "kanban",
        title: "칸반보드",
    },
    {
        id: "blog",
        title: "블로그",
    },
    {
        id: "portfolio",
        title: "포트폴리오",
    },
];
