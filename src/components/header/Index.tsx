import { HeaderBox } from "./HeaderBox";
import { Logo } from "./Logo";
import { HeaderNav } from "./HeaderNav";

export const Header = ({ path }: { path: string }) => {
    return (
        <>
            <HeaderBox>
                <Logo />
                <HeaderNav path={path} />
            </HeaderBox>
        </>
    );
};
