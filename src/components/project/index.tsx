import { useLocation } from "react-router-dom";

import { Header } from "../header/Index";
import { ProjectBox } from "./ProjectBox";
import { ProjectTab } from "./ProjectTab";

export const Project = () => {
    let location = useLocation();

    return (
        <ProjectBox>
            <Header path={location.pathname} />
            <ProjectTab />
        </ProjectBox>
    );
};
