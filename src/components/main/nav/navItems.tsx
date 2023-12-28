import {NavItem} from "./menu";
import styles from "@/app/layout.module.css";
import {
  ArrowUpTrayIcon,
  GlobeAltIcon,
  HomeIcon,
  InformationCircleIcon,
  LightBulbIcon,
  SparklesIcon,
  UserGroupIcon,
  UserPlusIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

let systemSlug = 'ToBeDynamicallyGenerated'

export const baseNavItems: NavItem[] = [
  // {label: 'Home', href: '/', icon: <HomeIcon className={styles.icon} />},
  {label: 'About', href: '/about', icon: <InformationCircleIcon className={styles.icon} />},
  {label: 'Resources', href: '/resources', icon: <LightBulbIcon className={styles.icon} />},
]

const palsNavItems: NavItem[] = [
  {label: 'My Pals', href: '/pals', icon: <UsersIcon className={styles.icon} />},
  {label: 'Outgoing Requests', href: '/pals/outgoing', icon: <ArrowUpTrayIcon className={styles.icon} />},
  {label: 'Add a Pal', href: '/pals/add', icon: <UserPlusIcon className={styles.icon} />},
]

export const allyNavItems: NavItem[] = [
  {label: 'Pals', href: '', icon: <UserGroupIcon className={styles.icon} />, subNav: palsNavItems},
  {label: 'Create a System', href: '/settings/create', icon: <SparklesIcon className={styles.icon} />},
]

const manageNavItems: NavItem[] = [
  {label: 'Dashboard', href: '/edit', icon: <SparklesIcon className={styles.icon} />},
  {label: 'System', href: '/edit/system', icon: <SparklesIcon className={styles.icon} />},
  {label: 'Alters', href: '/edit/alters', icon: <SparklesIcon className={styles.icon} />},
  {label: 'Alter Fields', href: '/edit/fields', icon: <SparklesIcon className={styles.icon} />},
  {label: 'System Settings', href: '/settings/system', icon: <SparklesIcon className={styles.icon} />},
]

export const systemNavItems: NavItem[] = [
  {label: 'System Management', href: '', icon: <GlobeAltIcon className={styles.icon} />, subNav: manageNavItems},
  {label: 'View System', href: `/index/${systemSlug}`, icon: <SparklesIcon className={styles.icon} />},
  {label: 'Analysis Tools', href: '/analysis', icon: <SparklesIcon className={styles.icon} />},
  {label: 'Pals', href: '', icon: <UserGroupIcon className={styles.icon} />, subNav: [
    palsNavItems[0],
    {label: 'Incoming Requests', href: '/pals/incoming', icon: <SparklesIcon className={styles.icon} />},
    ...(palsNavItems.slice(1))
  ]},
]

export const loggedInNavItems: NavItem[] = [
  {label: 'Account Settings', href: '/settings', icon: <SparklesIcon className={styles.icon} />},
  // {label: 'Log Out', href: '/api/auth/signout', icon: <SparklesIcon className={styles.icon} />},
]

export const loggedInNavItemsHeader: NavItem[] = [
  {label: 'Log Out', href: '/api/auth/signout', icon: <SparklesIcon className={styles.icon} />},
]

export const loggedOutNavItemsHeader: NavItem[] = [
  {label: 'Log In', href: '/api/auth/signin', icon: <SparklesIcon className={styles.icon} />},
  // {label: 'Sign Up', href: '/signup', icon: <SparklesIcon className={styles.icon} />},
]