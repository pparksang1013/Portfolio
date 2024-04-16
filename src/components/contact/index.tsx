import { useLocation } from "react-router-dom";

import { Header } from "../header/Index";
import { ContactBox } from "./ContactBox";
import { ContactContents } from "./ContactContents";

export const Contact = () => {
    let location = useLocation();

    return (
        <>
            <ContactBox>
                <Header path={location.pathname} shouldAnimate={true} />
                <ContactContents />
            </ContactBox>
        </>
    );
};
