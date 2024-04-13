import { aboutSkillStyle } from "./style/AboutSkillStyle";
import { SKILL_LIST_DATA } from "./data/skill_list_data";
import { SkillListEle } from "./child/SkillListEle";
import { SkillTab } from "./child/SkillTab";

export const AboutSkill = () => {
    const list = SKILL_LIST_DATA.map((ele, i) => {
        return (
            <SkillListEle
                key={i}
                item={ele.item}
                kor={ele.kor}
                firstcolor={ele.firstcolor}
                secondcolor={ele.secondcolor}
                size={ele.size}
            />
        );
    });

    return (
        <aboutSkillStyle.Box>
            <aboutSkillStyle.Title>: skill</aboutSkillStyle.Title>
            <aboutSkillStyle.Desc>
                프로젝트 수행과 개인 학습을 통해 <b>다양한 기술</b>을 습득하였습니다.
            </aboutSkillStyle.Desc>
            <aboutSkillStyle.Ul>{list}</aboutSkillStyle.Ul>
            <SkillTab />
        </aboutSkillStyle.Box>
    );
};
