import { homeButtonStyle } from "./style/HomeButtonStyle";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export const HomeButton = () => {
    return (
        <homeButtonStyle.Button
            to={"/about"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
        >
            view portfolio <LiaLongArrowAltRightSolid />
        </homeButtonStyle.Button>
    );
};
