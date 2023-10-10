'use client';
import styles from '@/app/layout.module.css'
import {useSideBarContext} from "@/components/context/sideBarContext";
import {Bars3Icon} from "@heroicons/react/24/outline";

const Hamburger = () => {
    const ctxVal = useSideBarContext()
    const setIsOpen = ctxVal.setState;
    const showNavMenu = () => {
        setIsOpen({ isOpen: true })
    }

    return (
        <button className={styles.openNavMenuButton} onClick={showNavMenu} aria-label="Navigation Menu" aria-expanded="false">
            <Bars3Icon className={styles.openNavMenuIcon} />
        </button>
    )
}

export default Hamburger;