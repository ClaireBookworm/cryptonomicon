import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Join() {
  return (
    <div className={styles.container}>
     <p className={styles.message}>Find the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.csclub}>CS Club</a> at the Club Fair. <br />
	Be there or be square.
	<br />
	We&apos;re watching...
	</p>
    </div>
  )
}
