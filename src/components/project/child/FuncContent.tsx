import { useRef, useEffect } from "react";
import { tabCommonStyle } from "../style/TabCommonStyle";
import { FuncContentTypeInterface } from "../type/func_content_type";

export const FuncContent = ({ contents }: { contents: FuncContentTypeInterface[] }) => {
    const refArray = useRef<HTMLDivElement[]>([]);

    function throttle(callback, time) {
        let waiting = false;
        return function () {
            if (!waiting) {
                callback.apply(this);
                waiting = true;
                setTimeout(() => {
                    waiting = false;
                }, time);
            }
        };
    }

    useEffect(() => {
        const handleScrollEvent = throttle(() => {
            const viewportCenter = window.innerHeight / 1.6 + window.scrollY;

            refArray.current.forEach((item) => {
                const itemCenter = item.offsetTop + item.offsetHeight / 2;
                const itemBottom = item.offsetTop + item.offsetHeight + 70;

                if (viewportCenter > itemCenter && viewportCenter < itemBottom) {
                    item.classList.add("on");
                } else {
                    item.classList.remove("on");
                }
            });
        }, 200);

        window.addEventListener("scroll", handleScrollEvent);
    }, []);

    const setRef = (ele: HTMLDivElement) => {
        if (ele && !refArray.current.includes(ele)) {
            refArray.current.push(ele);
        }
    };

    const data_map = contents.map((ele, i) => {
        return (
            <tabCommonStyle.FuncContent ref={setRef} key={i}>
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
