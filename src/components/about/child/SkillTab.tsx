import { useState } from "react";
import { skillTabStyle } from "../style/SkillTabStyle";
import { SKILL_TAB_DATA } from "../data/skill_tab_data";

// COMPONENT
import { TabJs } from "./TabJs";
import { TabReact } from "./TabReact";

export const SkillTab = () => {
    const [tab, setTab] = useState(0);

    const list = SKILL_TAB_DATA.map((ele) => {
        return (
            <skillTabStyle.Li key={ele.id} onClick={() => setTab(ele.id)} $active={ele.id === tab}>
                <h4>{ele.title}</h4>
            </skillTabStyle.Li>
        );
    });

    return (
        <skillTabStyle.Box>
            <skillTabStyle.Ul>{list}</skillTabStyle.Ul>
            <skillTabStyle.Contents>
                {tab === 0 && <TabJs />}
                {tab === 1 && <TabReact />}
            </skillTabStyle.Contents>
        </skillTabStyle.Box>
    );
};
