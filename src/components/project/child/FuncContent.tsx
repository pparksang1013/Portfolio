import { tabCommonStyle } from "../style/TabCommonStyle";
import { FuncContentTypeInterface } from "../type/func_content_type";

export const FuncContent = ({ contents }: { contents: FuncContentTypeInterface[] }) => {
    const data_map = contents.map((ele, i) => {
        return (
            <tabCommonStyle.FuncContent key={i}>
                <h5>{ele.title}</h5>

                <ul>
                    {ele.details.map((li, i) => (
                        <li key={i}>{li}</li>
                    ))}
                </ul>
            </tabCommonStyle.FuncContent>
        );
    });

    return <>{data_map}</>;
};
