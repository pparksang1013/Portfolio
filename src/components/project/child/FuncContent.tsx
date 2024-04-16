import { funcContentStyle } from "../style/FuncContentStyle";
import { FuncContentTypeInterface } from "../type/func_content_type";

export const FuncContent = ({ contents }: { contents: FuncContentTypeInterface[] }) => {
    const data_map = contents.map((ele, i) => {
        return (
            <funcContentStyle.Box key={i}>
                <funcContentStyle.Title>{ele.title}</funcContentStyle.Title>

                <funcContentStyle.Ul>
                    {ele.details.map((li, i) => (
                        <funcContentStyle.Li key={i}>{li}</funcContentStyle.Li>
                    ))}
                </funcContentStyle.Ul>
            </funcContentStyle.Box>
        );
    });

    return <>{data_map}</>;
};
