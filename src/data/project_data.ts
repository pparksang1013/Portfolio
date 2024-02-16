interface ProjectType {
    id: string;
    title: string;
    repository?: string;
}

export const projects_data: ProjectType[] = [
    {
        id: "todo",
        title: "로그인 & 투두리스트",
        repository: "https://github.com/pparksang1013/Login-Todolist.git",
    },
    {
        id: "kanban",
        title: "칸반보드",
        repository: "https://github.com/pparksang1013/Kanban_board.git",
    },
    {
        id: "blog",
        title: "블로그",
        repository: "https://github.com/pparksang1013/Blog.git",
    },
    {
        id: "portfolio",
        title: "포트폴리오",
    },
];
