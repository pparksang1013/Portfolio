import { contactContentsStyle } from "./style/ContactContentStyle";
import { Link } from "react-router-dom";

// ICON
import { PiPhoneFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const ContactContents = () => {
    return (
        <contactContentsStyle.Box>
            <contactContentsStyle.Title>
                <b>프론트엔드 개발자</b>에 지원한 <br />
                <b>박상민</b>이었습니다. <br />
                감사합니다.
            </contactContentsStyle.Title>
            <contactContentsStyle.Ul>
                <contactContentsStyle.Li>
                    <contactContentsStyle.IconBox>
                        <PiPhoneFill size={50} />
                    </contactContentsStyle.IconBox>
                    <contactContentsStyle.LiBox>
                        <h5>연락처</h5>
                        <p>010 4010 3000</p>
                    </contactContentsStyle.LiBox>
                </contactContentsStyle.Li>

                <contactContentsStyle.Li>
                    <contactContentsStyle.IconBox>
                        <SiGmail size={50} />
                    </contactContentsStyle.IconBox>
                    <contactContentsStyle.LiBox>
                        <h5>이메일</h5>
                        <p>
                            pparksang1013@
                            <br />
                            gmail.com
                        </p>
                    </contactContentsStyle.LiBox>
                </contactContentsStyle.Li>

                <contactContentsStyle.Li>
                    <contactContentsStyle.IconBox>
                        <FaGithub size={50} />
                    </contactContentsStyle.IconBox>
                    <contactContentsStyle.LiBox>
                        <h5>깃허브</h5>
                        <Link to="https://github.com/pparksang1013" target="_blank">
                            Github
                        </Link>
                    </contactContentsStyle.LiBox>
                </contactContentsStyle.Li>
            </contactContentsStyle.Ul>
        </contactContentsStyle.Box>
    );
};
