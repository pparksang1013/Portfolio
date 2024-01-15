import MainComp from "./components/main_page/MainComp";
import AboutComp from "./components/about_page/AboutComp";
import ProjectComp from "./components/project_page/ProjectComp";

import styled from "styled-components";

function App() {
    return (
        <Style_Root>
            <MainComp />
            <AboutComp />
            <ProjectComp />
            <div>PROJECT 1. 투두리스트 + 로그인 2. 칸반보드 3. 블로그 4. 아워맵 하</div>
        </Style_Root>
    );
}

export default App;

const Style_Root = styled.div`
    scroll-snap-type: y mandatory;
`;
