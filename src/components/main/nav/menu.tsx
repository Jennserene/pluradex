'use client'
import styles from "@/app/layout.module.css"
import {ReactNode, useEffect, useState} from "react"
import { gatherNavItemsSideBar } from "@/utilities/nav"
import Link from "next/link"
import cn from "classnames"
import {useSideBarContext} from "@/components/context/sideBarContext"
import { useUser } from "@/utilities/hooks/useUser"

export type NavItem = {
    label: string;
    href: string;
    icon: ReactNode;
    subNav?: NavItem[]
}

const Menu = () => {
    const ctxVal = useSideBarContext()
    const [ collapsed, setCollapsed ] = [ ctxVal.state.collapsed, ctxVal.setState ]
    const [user] = useUser()
    const isSignedIn = !!user
    const [expandedSubNav, setExpandedSubNav] = useState<string | null>(null)

    useEffect(() => {
        console.log("menu")
        collapsed && setExpandedSubNav(null)
    }, [collapsed])

    const toggleSubNav = (label: string) => {
        if (expandedSubNav === label) {
            setExpandedSubNav(null)
        } else {
            setCollapsed({ ...ctxVal.state, collapsed: false})
            setExpandedSubNav(label)
        }
    }

    const renderSubNav = (subNavItems: NavItem[]) => {
        return (
          <ul className={styles.subNavList}>
              {subNavItems.map((subNavItem, subIndex) => (
                <li key={`sub-nav-item-${subIndex}`} className={styles.subNavItem}>
                    <Link href={subNavItem.href} className={styles.subNavLink}>
                        {subNavItem.icon} <span>{subNavItem.label}</span>
                    </Link>
                </li>
              ))}
          </ul>
        )
    }

    const listNavItems = () => {
        return gatherNavItemsSideBar(isSignedIn).map((item: NavItem, index: number) => {
            const isSubNavExpanded = expandedSubNav === item.label

            const styling = cn(styles.navItem, {
                "rounded-md p-2 mx-3 gap-4": !collapsed,
                "rounded-full p-2 mx-3": collapsed,
            })

            if (item.subNav && item.subNav.length > 0) {
                return (
                  <li key={`nav-item-${index}`} className={styling}>
                      <button onClick={() => toggleSubNav(item.label)} className={styles.hasSubNav}>
                          {item.icon} <span>{!collapsed && item.label}</span>
                      </button>
                      {isSubNavExpanded && renderSubNav(item.subNav)}
                  </li>
                )
            } else {
                return (
                  <li key={`nav-item-${index}`} className={styling}>
                      <Link href={item.href} className={styles.navLink}>
                          {item.icon} <span>{!collapsed && item.label}</span>
                      </Link>
                  </li>
                )
            }
        })
    }

    return (
      <ul className={styles.navList}>
          {listNavItems()}
      </ul>
    )
}

export default Menu
