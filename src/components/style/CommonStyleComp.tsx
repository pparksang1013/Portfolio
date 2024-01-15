import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
`;

export const Highlight = styled.span`
    font-weight: 900;
    background-color: var(--primary-color);
    color: #fff;
    padding: 2px 12px;
    letter-spacing: 2px;
`;

type CategoryBoxType = {
    bgColor: string;
};

export const CategoryBox = styled.div<CategoryBoxType>`
    border: 1px solid rgb(223, 223, 223);
    padding: 3rem 30px;
    border-radius: 8px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05), -1px -1px 1px rgba(0, 0, 0, 0.03);

    .icon_circle {
        font-size: 2rem;
        background-color: ${(props) => props.bgColor};
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 4px;

        svg {
            color: #fff;
        }
    }
`;
