import { tabContentsData } from "../../../data/about/about";
import { tabContentsStyle } from "../style/TabContentsStyle";

export const TabJs = () => {
    const list = tabContentsData.js.contents.map((ele) => {
        return (
            <tabContentsStyle.Li key={ele.number}>
                {ele.title}
                <tabContentsStyle.Num $color="#fec21d;">{ele.number}</tabContentsStyle.Num>
            </tabContentsStyle.Li>
        );
    });

    return (
        <tabContentsStyle.Box>
            <tabContentsStyle.Title $color="#fec21d;">javascript</tabContentsStyle.Title>
            <tabContentsStyle.BorderLine $color="#fec21d;" />
            <tabContentsStyle.Ul>{list}</tabContentsStyle.Ul>
            <span>대한 내용을 학습했습니다.</span>
            <img src={tabContentsData.js.image} alt="object" />
        </tabContentsStyle.Box>
    );
};
