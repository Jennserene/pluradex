'use client';
import Menu from './menu';
import {useSideBarContext} from "@/components/context/sideBarContext";
import styles from "@/app/layout.module.css";
import MenuHeader from "./menuHeader";
import { useOnClickOutside } from "usehooks-ts";
import {useEffect, useRef} from "react"
import cn from "classnames";
import MenuFooter from "@/components/main/nav/menuFooter";
import {useSession} from "next-auth/react"

const SideBar = () => {
    const ctxVal = useSideBarContext()
    const [ collapsed, shown, isDesktop, setCollapsed ]
        = [ ctxVal.state.collapsed, ctxVal.state.shown, ctxVal.state.isDesktop, ctxVal.setState ]
    const { status } = useSession()
    const isSignedIn = status === "authenticated"

    const ref = useRef<HTMLElement>(null)
    useOnClickOutside(ref, () => {
        isDesktop && setCollapsed({ ...ctxVal.state, collapsed: true, shown: true })
        !isDesktop && setCollapsed({ ...ctxVal.state, collapsed: false, shown: false })
    })

    const hiddenMenuPlaceholder = () => {
        return (
          <div className={styles.hiddenMenuPlaceholder} />
        )
    }

    useEffect(() => {
        if (!isSignedIn) {
            setCollapsed(prevState => ({ ...prevState, shown: false }))
        }
    }, [isSignedIn, setCollapsed])

    if (!isSignedIn) {
        return hiddenMenuPlaceholder()
    }

    return (
        <nav className={cn(styles.nav, {
            "w-[300px]": !collapsed,
            "w-16": collapsed,
            "-translate-x-full": !shown
        })} ref={ref}>
            <div className={styles.navMenuContainer}>
                <MenuHeader />
                <Menu />
                <MenuFooter />
            </div>
        </nav>
    )
}

export default SideBar