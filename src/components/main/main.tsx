'use client'
import React, {ReactNode} from "react"
import styles from "@/app/layout.module.css"
import cn from "classnames"
import {useSideBarContext} from "@/components/context/sideBarContext"
import Header from "@/components/header/header"
import SideBar from "@/components/main/nav/sideBar"
import Footer from "@/components/footer/footer"

interface Props {
    children?: ReactNode
}

const Main = ({ children }: Props) => {
  const { state } = useSideBarContext()
  const { collapsed, isDesktop, shown } = state

  return (
    <div className={cn(styles.root, {
      "grid-cols-sidebar": !collapsed && isDesktop && shown,
      "grid-cols-sidebar-collapsed": collapsed && isDesktop && shown,
    })}>
      <SideBar />
      <div className={styles.main}>
        <Header />
        <main className={styles.content}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Main