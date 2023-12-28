import { ReactNode, Dispatch, SetStateAction, useState, useContext, createContext, useEffect } from 'react'
import {useWindowSize} from "@/utilities/hooks/useWindowSize"

export interface IProviderProps {
    children?: ReactNode
}

type SideBarContextState = {
    collapsed: boolean
    shown: boolean
    isDesktop: boolean
};

type SideBarContextValue = {
    state: SideBarContextState;
    setState: Dispatch<SetStateAction<SideBarContextState>>;
};

export const SideBarContext = createContext<SideBarContextValue | undefined>(undefined);

export const SideBarProvider = ({ children }: IProviderProps) => {
    const [state, setState] = useState<SideBarContextState>({ collapsed: true, shown: false, isDesktop: false });

    const { width } = useWindowSize()

    useEffect(() => {
        console.log("sideBarContext")
        if (!width) return
        const isDesktop = width > 768
        setState(prevState => ({ ...prevState, isDesktop }))
    }, [width])

    return (
      <SideBarContext.Provider value={{ state, setState }}>
          {children}
      </SideBarContext.Provider>
    );
};

export function useSideBarContext() {
    const ctxValue = useContext(SideBarContext);
    if (ctxValue === undefined) {
        throw new Error("Expected an AppProvider somewhere in the react tree to set context value");
    }
    return ctxValue;
}
