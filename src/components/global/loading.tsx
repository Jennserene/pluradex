import React from 'react'
import styles from './global.module.css'

const LoadingComponent: React.FC = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingIndicator}></div>
      Loading...
    </div>
  )
}

export default LoadingComponent;
