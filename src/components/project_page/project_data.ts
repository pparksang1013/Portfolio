interface ProjectType {
    title: string;
    stack: React.ReactElement[];
    role: string | React.ReactElement;
    sub: React.ReactElement;
}

// ICONS
import { stacks } from "./Stacks.tsx";
import { subDescription } from "./SubDescription";
import { role } from "./Roles.tsx";

export const projects_data: ProjectType[] = [
    {
        title: "로그인 & 투두리스트",
        stack: stacks.todoStack,
        role: role.todo,
        sub: subDescription.todoSub,
    },
    {
        title: "칸반보드",
        stack: stacks.kanbanStack,
        role: role.kanban,
        sub: subDescription.kanbanSub,
    },
    {
        title: "블로그",
        stack: stacks.blogStack,
        role: role.blog,
        sub: subDescription.blogSub,
    },
    {
        title: "포트폴리오",
        stack: stacks.portfolioStack,
        role: role.portfolio,
        sub: subDescription.portfolioSub,
    },
];
