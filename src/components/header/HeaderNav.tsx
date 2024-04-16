import { HeaderNavStyle } from "./style/HeaderNavStyle";
import { NAV_DATA } from "./data/nav_data";

export const HeaderNav = ({ path }: { path: string }) => {
    const navItem = NAV_DATA.map((ele) => {
        const isCurrentPath = path === ele.link;

        return (
            <li key={ele.id}>
                <HeaderNavStyle.NavLink to={ele.link} $textcolor={isCurrentPath}>
                    {ele.title}
                </HeaderNavStyle.NavLink>
            </li>
        );
    });
    return (
        <nav>
            <HeaderNavStyle.Ul>{navItem}</HeaderNavStyle.Ul>
        </nav>
    );
};
