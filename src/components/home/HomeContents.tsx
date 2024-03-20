import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { homedata } from "../../data/home/home";
import { MdKeyboardArrowRight } from "react-icons/md";

export const HomeContents = () => {
    const list = homedata.map((ele) => {
        const listDelay = ele.index * 0.3 + 2;
        return (
            <StyleList initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: listDelay }} key={ele.id}>
                <Link to={ele.link}>
                    {ele.title}
                    <MdKeyboardArrowRight className="arrow_icon" size={38} />
                </Link>
            </StyleList>
        );
    });

    return (
        <StyleContentsBox>
            <ul>{list}</ul>
        </StyleContentsBox>
    );
};

const StyleContentsBox = styled.div`
    width: 50%;
    font-family: "quicksilver";
`;

const StyleList = styled(motion.li)`
    font-weight: 900;
    font-size: 2.6rem;
    color: var(--primary-color);
    padding: 10px 30px;
    cursor: pointer;

    &:hover {
        background-color: #e5ffea;
    }

    & > a {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        color: var(--primary-color);

        & > img {
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 10px 8px;
        }
    }

    .arrow_icon {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 6px 4px;
    }
`;
