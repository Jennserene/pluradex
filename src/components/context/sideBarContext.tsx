import { Dispatch, SetStateAction, useState, useContext, createContext } from "react"

export interface IProviderProps {
    children?: any;
}

type SideBarContextState = { isOpen: boolean }

type SideBarContextValue = {
    state: SideBarContextState;
    setState: Dispatch<SetStateAction<SideBarContextState>>;
};

export const SideBarContext = createContext<SideBarContextValue | undefined>(undefined);

export const SideBarProvider = (props: IProviderProps) => {
    const [state, setState] = useState({ isOpen: false });

    return (
        <SideBarContext.Provider value={{ state, setState }}>
            {props.children}
        </SideBarContext.Provider>
    );
};

export function useSideBarContext() {
    const ctxValue = useContext(SideBarContext)
    if (ctxValue === undefined) throw new Error(
        "Expected an AppProvider somewhere in the react tree to set context value")
    return ctxValue // now has type AppContextValue
    // or even provide domain methods for better encapsulation
}