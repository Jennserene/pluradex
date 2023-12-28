import styles from '@/app/layout.module.css'
import Logo from './logo'
import HeaderNav from "@/components/main/nav/headerNav"
const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <Logo />
            </div>
            <div className={styles.headerCenter}></div>
            <HeaderNav />
        </header>
    )
}

export default Header

