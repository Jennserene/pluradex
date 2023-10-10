'use client';
import {SideBarProvider} from "./sideBarContext";
import {ReactNode} from "react";

interface Props {
    children?: ReactNode;
}

const Providers = ({ children, ...props }: Props) => {
    return (
        <SideBarProvider>
            {children}
        </SideBarProvider>
    )
}

export default Providers;