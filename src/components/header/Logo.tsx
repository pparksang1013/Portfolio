import { logoStyle } from "./style/LogoStyle";
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <logoStyle.Logo>
            <Link to="/">PARKSANGMIN</Link>
        </logoStyle.Logo>
    );
};
