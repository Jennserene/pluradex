import {useSideBarContext} from "@/components/context/sideBarContext";
import styles from "@/app/layout.module.css";
import cn from "classnames";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from "@heroicons/react/24/outline";

const MenuHeader = () => {
    const ctxVal = useSideBarContext()
    const [ collapsed, setCollapsed ] = [ ctxVal.state.collapsed, ctxVal.setState ];

    const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;

    const toggleMenu = () => {
        setCollapsed({ collapsed: !collapsed })
    }

    return (
        <div className={cn(styles.navMenuHeader, {
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
        })}>
            {!collapsed && <span className={styles.navMenuLogo}>Pluradex</span>}
            <button className={styles.toggleNavMenuButton} onClick={toggleMenu} aria-label="Close Navigation" aria-expanded={!collapsed}>
                <Icon className={styles.icon} />
            </button>
        </div>
    )
}

export default MenuHeader;