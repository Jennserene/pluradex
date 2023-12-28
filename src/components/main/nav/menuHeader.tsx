import {useSideBarContext} from "@/components/context/sideBarContext";
import styles from "@/app/layout.module.css";
import cn from "classnames";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from "@heroicons/react/24/outline";

const MenuHeader = () => {
    const ctxVal = useSideBarContext();
    const [ collapsed, isDesktop, setCollapsed ]
      = [ ctxVal.state.collapsed, ctxVal.state.isDesktop, ctxVal.setState ]

    const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;

    const toggleMenu = () => {
        isDesktop && setCollapsed({ ...ctxVal.state, collapsed: !collapsed })
        !isDesktop && setCollapsed({ ...ctxVal.state, collapsed: false, shown: false })
    }

    return (
        <div className={cn(styles.navMenuHeader, {
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
        })}>
            {!collapsed && <span className={styles.navMenuLogo}>Pluradex</span>}
            <button className={styles.toggleNavMenuButton} onClick={toggleMenu} aria-label="Toggle Navigation" aria-expanded={!collapsed}>
                <Icon className={styles.icon} />
            </button>
        </div>
    )
}

export default MenuHeader;