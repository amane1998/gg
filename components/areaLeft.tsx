import Link from 'next/link'
import styles from '../styles/arealeft.module.scss'

export default function AreaLeft() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span>Gurrea</span>
                <span>Guremory</span>
            </h1>
            <nav className={styles.nav}>
                <ol>
                    <li><Link href="/">CONTENTS</Link></li>
                    <li><Link href="info">INFO</Link></li>
                    {/* <li><Link href="message">MESSAGE</Link></li> */}
                </ol>
            </nav>
        </header>
    )
} 