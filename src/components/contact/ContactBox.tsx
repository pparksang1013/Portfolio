import { contactBoxStyle } from "./style/ContactBoxStyle";

export const ContactBox = ({ children }: { children: React.ReactNode }) => {
    return <contactBoxStyle.Box>{children}</contactBoxStyle.Box>;
};
