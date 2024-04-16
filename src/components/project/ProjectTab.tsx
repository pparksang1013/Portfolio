import { useState, useEffect } from "react";
import { projectTabStyle } from "./style/ProjectTabStyle";
import { PROJECT_TAB_DATA } from "./data/project_tab_data";

// COMP
import { TabTodo } from "./child/TabTodo";
import { TabKanban } from "./child/TabKanban";
import { TabBlog } from "./child/TabBlog";
import { TabPortfolio } from "./child/TabPortfolio";
import { ProjectPagination } from "./child/ProjectPagination";

export const ProjectTab = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [index]);

    const list = PROJECT_TAB_DATA.map((ele) => {
        return (
            <projectTabStyle.Li key={ele.id} onClick={() => setIndex(ele.id)} $active={ele.id === index}>
                {ele.title}
                {ele.id === index ? <projectTabStyle.Underline layoutId="underline" /> : null}
            </projectTabStyle.Li>
        );
    });

    return (
        <>
            <projectTabStyle.Ul>{list}</projectTabStyle.Ul>
            <projectTabStyle.Contents>
                {index === 0 && <TabTodo />}
                {index === 1 && <TabKanban />}
                {index === 2 && <TabBlog />}
                {index === 3 && <TabPortfolio />}
            </projectTabStyle.Contents>
            <ProjectPagination index={index} setIndex={setIndex} />
        </>
    );
};
