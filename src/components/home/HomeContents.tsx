import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { homedata } from "../../data/home/home";
import { CiLocationArrow1 } from "react-icons/ci";

export const HomeContents = () => {
    const list = homedata.map((ele) => {
        const listDelay = ele.index * 0.3 + 2;
        return (
            <StyleList initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: listDelay }} key={ele.id}>
                <Link to={ele.link}>
                    {ele.title}
                    <img src={ele.img.path} alt={`${ele.title}_icon`} height={ele.img.height} />
                    <CiLocationArrow1 className="arrow_icon" size={32} />
                </Link>
            </StyleList>
        );
    });

    return (
        <StyleContentsBox>
            <StyleHomeContents>{list}</StyleHomeContents>
        </StyleContentsBox>
    );
};

const StyleContentsBox = styled.div`
    width: 50%;
    font-family: "quicksilver";
`;

const StyleHomeContents = styled(motion.ul)`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 50px;
`;

const StyleList = styled(motion.li)`
    font-weight: 900;
    font-size: 2rem;
    color: var(--primary-color);
    width: calc(45% - 60px);
    height: 200px;
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    padding: 10px 14px;
    cursor: pointer;

    &:hover {
        background-color: #dae1fc;
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
