'use client';
import Menu from './menu';
import {useSideBarContext} from "@/components/context/sideBarContext";
import styles from "@/app/layout.module.css";
import MenuHeader from "./menuHeader";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import cn from "classnames";

const SideBar = () => {
    const ctxVal = useSideBarContext()
    const [ collapsed, shown, setCollapsed ]
        = [ ctxVal.state.collapsed, ctxVal.state.shown, ctxVal.setState ];

    const ref = useRef<HTMLElement>(null);
    useOnClickOutside(ref, () => {
        if (window.innerWidth > 768) {
            setCollapsed({ collapsed: true, shown: true })
        } else {
            setCollapsed({ collapsed: false, shown: false })
        }
    })

    return (
        <nav className={cn(styles.nav, {
            "w-[300px]": !collapsed,
            "w-16": collapsed,
            "-translate-x-full": !shown,
        })} ref={ref}>
            <div className={styles.navMenuContainer}>
                <MenuHeader />
                <Menu />
            </div>
        </nav>
    )
}

export default SideBar;