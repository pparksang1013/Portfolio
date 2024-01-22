interface ProjectType {
    title: string;
    icon: string;
    stack: (React.ReactElement | string)[];
}

// ICONS
import { stacks } from "./Stacks.tsx";

// IMG
import todoIcon from "/img/todo-login_icon.png";
import kanbanIcon from "/img/kanban_icon.png";
import blogIcon from "/img/blog_icon.png";
import portfolioIcon from "/img/portfolio_icon.png";

export const projects_data: ProjectType[] = [
    {
        title: "로그인 & 투두리스트",
        icon: todoIcon,
        stack: stacks.todoStack,
    },
    {
        title: "칸반보드",
        icon: kanbanIcon,
        stack: stacks.kanbanStack,
    },
    {
        title: "블로그",
        icon: blogIcon,
        stack: stacks.blogStack,
    },
    {
        title: "포트폴리오",
        icon: portfolioIcon,
        stack: stacks.portfolioStack,
    },
];
