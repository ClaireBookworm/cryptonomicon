import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <a href="/join"><p className={styles.pressStart}><span className={styles.pink}>&#10094;</span> CRYPTONOMICON <span className={styles.yellow}>&#10095;</span></p></a>
    </div>
  )
}
