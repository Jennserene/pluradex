import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div>
        <h1 className={styles.sectionTitle}>SECTION NAME</h1>
        <h2 className={styles.systemName}>A Good System Title</h2>
        <p className={styles.info}>Traumagenic</p>
      </div>
      <div>
        <h1 className={styles.sectionTitle}>Description</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet imperdiet arcu. Nam at velit magna. Fusce mauris turpis, tristique vitae mollis quis, finibus vel mauris. Fusce sit amet massa lobortis enim pharetra sodales quis et odio. Sed lectus velit, consectetur id dolor in, sagittis rhoncus lorem. Suspendisse viverra arcu ac urna rutrum, at congue eros imperdiet. Cras vel felis arcu.</p>
      </div>
    </div>
  )
}
