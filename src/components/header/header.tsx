import styles from '@/app/layout.module.css'
import Logo from './logo'
import Hamburger from "./hamburger";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <Logo />
            </div>
            <div className={styles.headerCenter}></div>
            <div className={styles.headerRight}>
                <Hamburger />
            </div>
        </header>
    )
}

export default Header

