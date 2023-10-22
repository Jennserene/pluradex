'use client';
import {SideBarProvider} from "./sideBarContext";
import { ThemeProvider } from 'next-themes'
import {ReactNode} from "react";

interface Props {
  children?: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <SideBarProvider>
        {children}
      </SideBarProvider>
    </ThemeProvider>
  )
}

export default Providers;