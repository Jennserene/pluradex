'use client'
import {SideBarProvider} from "./sideBarContext"
import {UserProvider} from "./userContext"
import { ThemeProvider } from 'next-themes'
import {ReactNode} from "react"
import {User} from "@auth/core/types"

interface Props {
  children?: ReactNode,
  user: User | null
}

const Providers = ({ children, user }: Props) => {
  return (
    <UserProvider userFromServer={user}>
      <ThemeProvider>
        <SideBarProvider>
          {children}
        </SideBarProvider>
      </ThemeProvider>
    </UserProvider>
  )
}

export default Providers