'use client'

import styles from "@/app/layout.module.css"
import Link from "next/link"
import Hamburger from "@/components/header/hamburger"
import {usePathname} from "next/navigation"
import {gatherNavItemsHeader} from "@/utilities/nav"
import {useUser} from "@/utilities/hooks/useUser"

const HeaderNav = () => {
  const [user] = useUser()
  const isSignedIn = !!user
  const pathname = usePathname()
  const publicPaths = ["/", "about", "resources"]
  const isPublic = publicPaths.some(path => pathname.includes(path))

  const navItems = gatherNavItemsHeader(isSignedIn, isPublic)

  const renderNavItems = () => {
    return navItems.map((item, index) => {
      return (
        <Link href={item.href} key={`nav-item-${index}`}>
          {item.label}
        </Link>
      )
    })
  }

  return (
    <div className={styles.headerNav}>
      {renderNavItems()}
      {isSignedIn && <Hamburger/>}
    </div>
  )
}

export default HeaderNav