import {useSideBarContext} from "@/components/context/sideBarContext";
import styles from "@/app/layout.module.css";

const CloseButton = () => {
    const ctxVal = useSideBarContext()
    const setIsOpen = ctxVal.setState;

    const closeMenu = () => {
        setIsOpen({ isOpen: false })
    }

    return (
        <div className={styles.closeNavMenuContainer}>
            <button className={styles.closeNavMenuButton} onClick={closeMenu} aria-label="Close Navigation" aria-expanded="true">&#10006;</button>
        </div>
    )
}

export default CloseButton;