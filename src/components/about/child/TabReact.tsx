import { tabContentsData } from "../../../data/about/about";
import { tabContentsStyle } from "../style/TabContentsStyle";

export const TabReact = () => {
    const list = tabContentsData.react.contents.map((ele) => {
        return (
            <tabContentsStyle.Li key={ele.number}>
                {ele.title}
                <tabContentsStyle.Num $color="#20d3e7">{ele.number}</tabContentsStyle.Num>
            </tabContentsStyle.Li>
        );
    });

    return (
        <tabContentsStyle.Box>
            <tabContentsStyle.Title $color="#20d3e7">react</tabContentsStyle.Title>
            <tabContentsStyle.BorderLine $color="#20d3e7" />
            <tabContentsStyle.Ul>{list}</tabContentsStyle.Ul>
            <span>대한 내용을 학습했습니다.</span>
            <img src={tabContentsData.react.image} alt="object" />
        </tabContentsStyle.Box>
    );
};
