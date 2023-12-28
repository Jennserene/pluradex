import { NavItem } from "@/components/main/nav/menu";
import {
    allyNavItems,
    baseNavItems,
    loggedInNavItems,
    loggedInNavItemsHeader,
    loggedOutNavItemsHeader,
    systemNavItems
} from "@/components/main/nav/navItems"

export function gatherNavItemsSideBar(loggedIn: boolean): NavItem[] {
    let gatheredNavItems: NavItem[] = []
    gatheredNavItems = gatheredNavItems.concat(baseNavItems)
    loggedIn && (gatheredNavItems = addLoggedInNavItemsSideBar(gatheredNavItems))
    return gatheredNavItems
}

export function gatherNavItemsHeader(LoggedIn: boolean, isPublic: boolean): NavItem[] {
    let gatheredNavItems: NavItem[] = []
    LoggedIn && (gatheredNavItems = addLoggedInNavItemsHeader(gatheredNavItems))
    ;(!LoggedIn && isPublic) && (gatheredNavItems = gatheredNavItems.concat(baseNavItems))
    !LoggedIn && (gatheredNavItems = addLoggedOutNavItemsHeader(gatheredNavItems))
    return gatheredNavItems
}

const addLoggedInNavItemsSideBar = (gatheredNavItems: NavItem[]): NavItem[] => {
    let accountType: string = "system"; // To be dynamically set
    if (accountType === "system") {
        gatheredNavItems = gatheredNavItems.concat(systemNavItems)
    } else if (accountType === "ally") {
        gatheredNavItems = gatheredNavItems.concat(allyNavItems)
    } else {
        throw new Error("Invalid account type")
    }
    gatheredNavItems = gatheredNavItems.concat(loggedInNavItems)
    return gatheredNavItems;
}

const addLoggedInNavItemsHeader = (gatheredNavItems: NavItem[]): NavItem[] => {
    gatheredNavItems = gatheredNavItems.concat(loggedInNavItemsHeader)
    return gatheredNavItems;
}

const addLoggedOutNavItemsHeader = (gatheredNavItems: NavItem[]): NavItem[] => {
    gatheredNavItems = gatheredNavItems.concat(loggedOutNavItemsHeader)
    return gatheredNavItems;
}