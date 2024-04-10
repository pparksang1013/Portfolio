import { useState } from "react";
import { projectTabStyle } from "./style/ProjectTabStyle";
import { PROJECT_TAB_DATA } from "./data/project_tab_data";

// COMP
import { TabTodo } from "./child/TabTodo";
import { TabKanban } from "./child/TabKanban";
import { TabBlog } from "./child/TabBlog";

export const ProjectTab = () => {
    const [tab, setTab] = useState(0);

    const list = PROJECT_TAB_DATA.map((ele) => {
        return (
            <projectTabStyle.Li key={ele.id} onClick={() => setTab(ele.id)} $active={ele.id === tab}>
                {ele.title}
                {ele.id === tab ? <projectTabStyle.Underline layoutId="underline" /> : null}
            </projectTabStyle.Li>
        );
    });

    return (
        <>
            <projectTabStyle.Ul>{list}</projectTabStyle.Ul>
            <projectTabStyle.Contents>
                {tab === 0 && <TabTodo />}
                {tab === 1 && <TabKanban />}
                {tab === 2 && <TabBlog />}
            </projectTabStyle.Contents>
        </>
    );
};
