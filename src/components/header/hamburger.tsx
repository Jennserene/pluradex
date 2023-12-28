'use client';
import styles from '@/app/layout.module.css'
import {useSideBarContext} from "@/components/context/sideBarContext";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

const Hamburger = () => {
    const ctxVal = useSideBarContext()
    const [ shown, setState ] = [ ctxVal.state.shown, ctxVal.setState ];
    const showNavMenu = () => {
        setState({ ...ctxVal.state, collapsed: false, shown: !shown })
    }

    return (
        <div className={styles.headerHamburger}>
            { !shown ?
                <button className={styles.openNavMenuButton} onClick={showNavMenu} aria-label="Navigation Menu" aria-expanded="false">
                    <Bars3Icon className={styles.icon} />
                </button> :
                <div className={styles.openNavMenuButton} aria-label="Close Navigation Menu" aria-expanded="true">
                    <XMarkIcon className={styles.icon} />
                </div>
            }
        </div>
    )
}

export default Hamburger;