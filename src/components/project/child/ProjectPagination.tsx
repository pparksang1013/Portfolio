import { paginationStyle } from "../style/ProjectPaginationStyle";
import { pagination_prop_interface } from "../type/project_pagination_type";

export const ProjectPagination: React.FC<pagination_prop_interface> = ({ index, setIndex }) => {
    const hasPrev = index > 0;
    const hasNext = index < 3;

    return (
        <paginationStyle.Box>
            {hasPrev && (
                <paginationStyle.PrevBox
                    onClick={() => {
                        setIndex((prev) => prev - 1);
                    }}
                >
                    <paginationStyle.PrevIcon size={24} />
                    <span>PREV PROJECT</span>
                </paginationStyle.PrevBox>
            )}
            {hasNext && (
                <paginationStyle.NextBox
                    onClick={() => {
                        setIndex((prev) => prev + 1);
                    }}
                >
                    <span>NEXT PROJECT</span>
                    <paginationStyle.NextIcon size={24} />
                </paginationStyle.NextBox>
            )}
        </paginationStyle.Box>
    );
};
