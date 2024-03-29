import { tabContentsData } from "../../../data/about/about";
import { tabContentsStyle } from "../style/TabContentsStyle";

export const TabReact = () => {
    const list = tabContentsData.react.contents.map((ele) => {
        return (
            <tabContentsStyle.Li key={ele.number}>
                <tabContentsStyle.LiTextBox>
                    <h5>{ele.title}</h5>
                    <tabContentsStyle.Num $color="#20d3e7;">{ele.number}</tabContentsStyle.Num>
                </tabContentsStyle.LiTextBox>
                <img src={tabContentsData.react.image} alt="object" height={16} />
            </tabContentsStyle.Li>
        );
    });

    return (
        <tabContentsStyle.Box>
            <tabContentsStyle.TitleBox $color="#20d3e7;">
                <h4>( react )</h4>
                <span>대한 내용을 학습했습니다.</span>
            </tabContentsStyle.TitleBox>

            <tabContentsStyle.Ul>{list}</tabContentsStyle.Ul>
        </tabContentsStyle.Box>
    );
};
