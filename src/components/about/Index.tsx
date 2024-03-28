import { Header } from "../header/Index";
import { useLocation } from "react-router-dom";
import { AboutBox } from "./AboutBox";
import { AboutProfile } from "./AboutProfile";
import { AboutEdu } from "./AboutEdu";
import { AboutSkill } from "./AboutSkill";

export const About = () => {
    let location = useLocation();

    return (
        <>
            <AboutBox>
                <Header path={location.pathname} />
                <AboutProfile />
                <AboutEdu />
                <AboutSkill />
            </AboutBox>
        </>
    );
};
