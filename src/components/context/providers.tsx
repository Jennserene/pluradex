'use client';
import { SessionProvider } from "next-auth/react";
import {SideBarProvider} from "./sideBarContext";
import { ThemeProvider } from 'next-themes'
import {ReactNode} from "react";

interface Props {
  children?: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <SideBarProvider>
          {children}
        </SideBarProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Providers;