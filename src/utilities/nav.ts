import { NavItem } from "@/components/main/nav/menu";
import {
    allyNavItems,
    baseNavItems,
    loggedInNavItems,
    loggedOutNavItems,
    systemNavItems
} from "@/components/main/nav/navItems";

export function gatherNavItems(): NavItem[] {
    let loggedIn: boolean = false; // To be dynamically set

    let gatheredNavItems: NavItem[] = [];
    gatheredNavItems = gatheredNavItems.concat(baseNavItems);
    if (loggedIn) {
        return addLoggedInNavItems(gatheredNavItems);
    }
    return addLoggedOutNavItems(gatheredNavItems);
}

const addLoggedInNavItems = (gatheredNavItems: NavItem[]): NavItem[] => {
    let accountType: string = "system"; // To be dynamically set
    if (accountType === "system") {
        gatheredNavItems = gatheredNavItems.concat(systemNavItems);
    } else if (accountType === "ally") {
        gatheredNavItems = gatheredNavItems.concat(allyNavItems);
    } else {
        throw new Error("Invalid account type");
    }
    gatheredNavItems = gatheredNavItems.concat(loggedInNavItems);
    return gatheredNavItems;
}

const addLoggedOutNavItems = (gatheredNavItems: NavItem[]): NavItem[] => {
    gatheredNavItems = gatheredNavItems.concat(loggedOutNavItems);
    return gatheredNavItems;
}