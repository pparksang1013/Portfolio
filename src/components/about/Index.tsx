import { Header } from "../header/Index";
import { useLocation } from "react-router-dom";

export const About = () => {
    let location = useLocation();

    return <Header path={location.pathname} />;
};
