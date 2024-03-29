import styled from "styled-components";
import { aboutBoxStyle } from "./style/AboutBoxStyle";
aboutBoxStyle;

export const AboutBox = ({ children }: { children: React.ReactNode }) => {
    return <aboutBoxStyle.Box>{children}</aboutBoxStyle.Box>;
};
