import styles from "@/app/layout.module.css";
import {ReactNode} from "react";
import { gatherNavItems } from "@/utilities/nav";
import Link from "next/link";
import cn from "classnames";
import {useSideBarContext} from "@/components/context/sideBarContext";

export type NavItem = {
    label: string;
    href: string;
    icon: ReactNode;
    subNav?: NavItem[];
}
const Menu = () => {
    const collapsed = useSideBarContext().state.collapsed
    const listNavItems = () => {
        return gatherNavItems().map((item: NavItem, index: number) => {
            return (
                <li key={`nav-item-${index}`} className={cn(styles.navItem, {
                    "rounded-md p-2 mx-3 gap-4": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                })}>
                    <Link href={item.href} className={styles.navLink}>
                        {item.icon} <span>{!collapsed && item.label}</span>
                    </Link>
                </li>
            )
        })
    }

    return (
        <ul className={styles.navList}>
            {listNavItems()}
        </ul>
    )
}

export default Menu;