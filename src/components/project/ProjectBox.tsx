import { projectBoxStyle } from "./style/ProjectBoxStyle";

export const ProjectBox = ({ children }: { children: React.ReactNode }) => {
    return <projectBoxStyle.Box>{children}</projectBoxStyle.Box>;
};
