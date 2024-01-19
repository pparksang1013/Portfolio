interface ProjectType {
    title: string;
    icon: string;
}

import todoIcon from "/img/todo-login_icon.png";
import kanbanIcon from "/img/kanban_icon.png";
import blogIcon from "/img/blog_icon.png";
import portfolioIcon from "/img/portfolio_icon.png";

export const projects_data: ProjectType[] = [
    { title: `LOGIN & TODOLIST`, icon: todoIcon },
    { title: "KANBAN BOARD", icon: kanbanIcon },
    { title: "BLOG", icon: blogIcon },
    { title: "PORTFOLIO", icon: portfolioIcon },
];
