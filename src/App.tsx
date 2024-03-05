import MainComp from "./components/main_page/MainComp";
import AboutComp from "./components/about_page/AboutComp";
import ProjectComp from "./components/project_page/ProjectComp";
import ContactComp from "./components/contact_page/ContactComp";

import styled from "styled-components";

function App() {
    return (
        <Style_Root>
            <MainComp />
            <AboutComp />
            <ProjectComp />
            <ContactComp />
        </Style_Root>
    );
}

export default App;

const Style_Root = styled.div`
    scroll-snap-type: y mandatory;
`;
