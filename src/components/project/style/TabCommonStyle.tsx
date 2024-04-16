import styled from "styled-components";
import { GreytextStyleInterface } from "../type/tab_common_style_type";
import { FaStarOfLife } from "react-icons/fa";

const MainBox = styled.div`
    margin: 40px 0;
`;

const Title = styled.h2`
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 8px;
    color: var(--primary-color);
    -webkit-text-stroke: 1.5px;

    & span {
        font-family: "quicksilver";
        font-size: 0.8em;
        padding-right: 20px;
        vertical-align: middle;
        color: var(--primary-color);
        -webkit-text-stroke: 0px;
    }
`;

const Desc = styled.div`
    font-size: 1.1em;
    line-height: 1.68;
    padding: 2px 20px;
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        width: 5px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--primary-color);
        border-radius: 50px;
        opacity: 0.8;
    }
`;

const FuncBox = styled.div`
    margin-top: 7rem;
`;

const FuncMain = styled.div`
    margin-bottom: 1rem;

    & h3 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 1rem;
        color: rgba(var(--primary-rgb), 0.9);
    }

    & h4 {
        font-size: 1.6rem;
        font-weight: 900;
        display: flex;
        gap: 6px;
        line-height: 2;
    }
`;

const TroubleShootingBox = styled.div`
    margin-top: 7rem;
`;

const TroubleShootingMain = styled.div`
    margin-bottom: 1rem;

    & + div {
        margin-top: 0rem;
    }

    & h3 {
        font-size: 2rem;
        font-weight: 900;
        color: var(--orange-color);
    }
`;

const TroubleShootingContents = styled.div`
    margin-top: 3rem;

    & h4 {
        font-size: 1.6rem;
        font-weight: 900;
        line-height: 2;
        margin-top: -0.5rem;

        & span {
            font-family: var(--font-toss);
            font-size: 20px;
            filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.1));
            vertical-align: top;
            padding-bottom: 4px;
            margin-right: 6px;
            display: inline-block;
        }
    }

    & h5 {
        font-size: 1em;
        margin: 0.8rem 0 0.2rem;
    }

    & p {
        line-height: 1.6;
    }
`;

const InsightBox = styled.div`
    margin-top: 7rem;
`;

const InsightMain = styled.div`
    margin-bottom: 1rem;

    & + div {
        margin-top: 0rem;
    }

    & h3 {
        font-size: 2rem;
        font-weight: 900;
        color: var(--blue-color);
    }
`;

const InsightContents = styled.div`
    margin-top: 3rem;

    & h4 {
        font-size: 1.6rem;
        font-weight: 900;
        line-height: 2;
        margin-top: -0.5rem;

        & span {
            font-family: var(--font-toss);
            filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.05));
            padding-bottom: 4px;
            margin-right: 4px;
            display: inline-block;
            vertical-align: middle;
            font-size: 0.5em;
            opacity: 0.8;
        }
    }

    & p {
        line-height: 1.68;
    }
`;

const StarIcon = styled(FaStarOfLife)`
    filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.05));
    color: var(--primary-color);
`;

const GreyText = styled.p<GreytextStyleInterface>`
    color: var(--darkgrey-color);
    font-size: 0.88em;
    margin: ${(props) => (props.$customMargin ? props.$customMargin : "0px")};
`;

export const tabCommonStyle = {
    MainBox,
    Title,
    Desc,
    FuncBox,
    FuncMain,
    TroubleShootingBox,
    TroubleShootingMain,
    TroubleShootingContents,
    InsightBox,
    InsightMain,
    InsightContents,
    StarIcon,
    GreyText,
};
