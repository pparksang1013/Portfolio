import { homeSectionStyle } from "./style/HomeSectionStyle";

export const HomeSection = ({ children }: { children: React.ReactNode }) => {
    return <homeSectionStyle.HomeSection>{children}</homeSectionStyle.HomeSection>;
};
