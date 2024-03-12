import { HomeSection } from "./HomeSection";
import { HomeTitle } from "./HomeTitle";
import { HomeContents } from "./HomeContents";

export const Home = () => {
    return (
        <HomeSection>
            <HomeTitle />
            <HomeContents />
        </HomeSection>
    );
};
