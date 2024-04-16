import { SkillListEleStyle } from "../style/SkillListEleStyle";
import { SkillListPropInterface } from "../type/skill_list_type";

export const SkillListEle = ({ item, kor, firstcolor, secondcolor, size }: SkillListPropInterface) => {
    return (
        <SkillListEleStyle.List $firstcolor={firstcolor} $secondcolor={secondcolor}>
            <SkillListEleStyle.Item $size={size}>
                <p>{item}</p>
                <br />
                <SkillListEleStyle.Colon>:</SkillListEleStyle.Colon>
                <SkillListEleStyle.Kor>{kor}</SkillListEleStyle.Kor>
            </SkillListEleStyle.Item>
        </SkillListEleStyle.List>
    );
};
