'use client';
import Menu from './menu';
import {useSideBarContext} from "@/components/context/sideBarContext";
import styles from "@/app/layout.module.css";
import clsx from "clsx";
import CloseButton from "./closeButton";

const SideBar = () => {
    const ctxVal = useSideBarContext()
    const isOpen = ctxVal.state.isOpen;

    return (
        <nav className={clsx(styles.nav, {
            "bg-indigo-700": true,
            "-translate-x-full": !isOpen,
        })}>
            <div className={styles.navMenuContainer}>
                { isOpen && <CloseButton /> }
                <Menu />
            </div>
        </nav>
    )
}

export default SideBar;

// "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true,
// "md:h-[calc(100vh-64px)] h-full w-[300px]": true,
// "transition-transform duration-300 ease-in-out md:translate-x-0": true,
// "-translate-x-full ": !isOpen,