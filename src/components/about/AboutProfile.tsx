import profileImg from "/img/parksangmin.png";
import { aboutProfileStyle } from "./style/AboutProfileStyle";

export const AboutProfile = () => {
    return (
        <aboutProfileStyle.Box>
            <aboutProfileStyle.NameBox>
                <aboutProfileStyle.Name>박상민</aboutProfileStyle.Name>
                <aboutProfileStyle.NameContents>
                    <aboutProfileStyle.Birth>93. 10. 13.</aboutProfileStyle.Birth> <br />
                    <aboutProfileStyle.EngName>parksangmin</aboutProfileStyle.EngName>
                </aboutProfileStyle.NameContents>
            </aboutProfileStyle.NameBox>
            <aboutProfileStyle.Desc>
                👋 타인의 의견을 수용하며 지속적으로 성장해 나가는 프론트엔드 개발자
            </aboutProfileStyle.Desc>
            <aboutProfileStyle.ImgBox>
                <img src={profileImg} height={650} />
            </aboutProfileStyle.ImgBox>
        </aboutProfileStyle.Box>
    );
};
