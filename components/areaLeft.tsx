import styles from '../styles/arealeft.module.scss'

export default function AreaLeft() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span className={`${styles.bgextend} ${styles.bgLrextendTrigger}`}>
                    <span className={styles.bggappearTrigger}>
                        Gurrea
                    </span>
                </span>
                <span className={`${styles.bgextend} ${styles.bgLrextendTrigger}`}>
                    <span className={styles.bggappearTrigger}>
                        Guremory
                    </span>
                </span>            
            </h1>
            {/* <p>------------</p> */}
            <nav className={styles.nav}>
                <ol>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contents">CONTENTS</a></li>
                    <li><a href="#works">WORKS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#caution">CAUTION</a></li>
                </ol>
            </nav>
            {/* <div className={styles.subTitle}>
                Official WebSite
            </div> */}
        </header>
    )
}