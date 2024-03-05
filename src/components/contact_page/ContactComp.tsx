import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

function ContactComp() {
    return (
        <Style_ContactWrapper>
            <Style_ContactTitle>
                타인의 의견을 존중하며,
                <br /> 지속적으로 성장하는
                <br /> 프론트엔드 개발자가 되고 싶습니다
            </Style_ContactTitle>

            <img src="img/return.png" alt="return_img" height={70} className="return" />

            <Style_ContactList>
                <li>박상민</li>
                <li>📞 010 4010 3000</li>
                <li>
                    <a href="github.com/pparksang1013">
                        <FaGithub />
                        Github
                    </a>
                </li>
            </Style_ContactList>
        </Style_ContactWrapper>
    );
}

export default ContactComp;

const Style_ContactWrapper = styled.footer`
    height: 100vh;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 80px;
`;

const Style_ContactTitle = styled.h3`
    margin: 20px 0 60px;
    font-size: 2.6em;
    font-weight: 900;
    position: relative;
    line-height: 1.3;

    &::after {
        content: "";
        background-color: var(--primary-color);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: absolute;
        margin: 32px 0 5px 2px;
    }
`;

const Style_ContactList = styled.ul`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 10rem;
    font-size: 2.6rem;
    font-weight: 900;

    li {
        line-height: 1.6;
    }
    li:first-of-type {
        font-size: 3.8rem;
        letter-spacing: 6px;
    }
    li:nth-of-type(3) a {
        color: var(--orange-color);
        font-size: 2rem;
    }
    li:nth-of-type(3) svg {
        margin-right: 4px;
        color: var(--orange-color);
    }
`;
