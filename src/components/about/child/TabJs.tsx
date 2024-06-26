import { TAB_CONTENTS_DATA } from "../data/skill_tab_data";
import { tabContentsStyle } from "../style/TabContentsStyle";

export const TabJs = () => {
    const list = TAB_CONTENTS_DATA.js.contents.map((ele) => {
        return (
            <tabContentsStyle.Li key={ele.number}>
                <tabContentsStyle.LiTextBox>
                    <h5>{ele.title}</h5>
                    <tabContentsStyle.Num $color="#fec21d;">{ele.number}</tabContentsStyle.Num>
                </tabContentsStyle.LiTextBox>
                <img src={TAB_CONTENTS_DATA.js.image} alt="object" height={16} />
            </tabContentsStyle.Li>
        );
    });

    return (
        <tabContentsStyle.Box>
            <tabContentsStyle.TitleBox $color="#fec21d;">
                <h4>( javascript )</h4>
                <span>에 대한 내용을 학습했습니다.</span>
            </tabContentsStyle.TitleBox>

            <tabContentsStyle.Ul>{list}</tabContentsStyle.Ul>
        </tabContentsStyle.Box>
    );
};
