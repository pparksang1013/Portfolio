import { HeaderBox } from "./HeaderBox";
import { Logo } from "./Logo";
import { HeaderNav } from "./HeaderNav";

export const Header = ({ path, shouldAnimate }: { path: string; shouldAnimate?: boolean }) => {
    return (
        <>
            <HeaderBox shouldAnimate={shouldAnimate}>
                <Logo />
                <HeaderNav path={path} />
            </HeaderBox>
        </>
    );
};
