import {useSideBarContext} from "@/components/context/sideBarContext";
import styles from "@/app/layout.module.css";
import ThemeChanger from "@/components/main/nav/themeChanger";

const MenuFooter = () => {
  const ctxVal = useSideBarContext();
  const collapsed = ctxVal.state.collapsed;

  return (
    <div className={styles.navMenuFooter}>
      {!collapsed && <ThemeChanger />}
    </div>
  )
}

export default MenuFooter;