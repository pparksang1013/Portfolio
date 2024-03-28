import styled from "styled-components";

interface IEleProp {
    item: string;
    kor: string;
    maincolor: string;
    secondcolor: string;
    size?: string;
}

interface IStyleComponents {
    $maincolor?: string;
    $secondcolor?: string;
    $size?: string;
}

export const SkillListEle = ({ item, kor, maincolor, secondcolor, size }: IEleProp) => {
    return (
        <List $maincolor={maincolor} $secondcolor={secondcolor}>
            <Item $size={size}>
                <h3>{item}</h3>
                <br />
                <Colon>:</Colon>
                <Kor>{kor}</Kor>
            </Item>
        </List>
    );
};

const Item = styled.p<IStyleComponents>`
    font-family: "quicksilver";

    & h3 {
        font-size: ${(props) => (props.$size ? props.$size : "2.5rem")};
        margin-bottom: -24px;
    }
`;

const Colon = styled.span`
    display: inline-block;
    font-size: 1.1em;
    margin-right: 8px;
`;

const Kor = styled.span`
    font-weight: 900;
    font-size: 0.9rem;
    vertical-align: middle;
`;

const List = styled.li<IStyleComponents>`
    position: relative;
    color: var(--grey-color);
    width: 150px;
    min-width: 150px;

    &:hover ${Item} {
        background: radial-gradient(ellipse at top, ${(props) => props.$maincolor}, ${(props) => props.$secondcolor});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:hover ${Colon} {
        color: ${(props) => props.$maincolor};
    }

    &:hover ${Kor} {
        color: ${(props) => props.$maincolor};
    }
`;
